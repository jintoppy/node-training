(function(){

    $(function(){
        const promise = $.get('/api/users');

        promise.then((res) => {
            const table = $('<table border="1" padding="10" />');
            const headerTr = $('<tr><th>Name</th><th>Age</th><th></th></tr>')
            table.append(headerTr);
            res.forEach((user) => {
                const tr = $('<tr />');
                const nameTd = $('<td />');
                const ageTd = $('<td />');
                const actionTd = $(`<td><input type="hidden" value="${user.id}" /><button class="viewBtn">View Details</button></td>`)
                nameTd.text(user.name);
                ageTd.text(user.age);
                tr.append(nameTd);
                tr.append(ageTd);
                tr.append(actionTd);
                table.append(tr);
            });
            $('#container').append(table);
            
        }, (err) => {
            console.log(err);
        });

        $('#container').on('click', '.viewBtn', (event) => {
            const btn = $(event.target);
            const userId = btn.prev().val();
            const promise = $.get(`/api/users/${userId}`);

            promise.then((res) => {
                $("#details_block #name").text(res.name);
                $("#details_block #age").text(res.age);
                $('#details_block').show();
            }, (err) => {
                console.log(err);
            });
        });

        $('#details_block').hide();
    });

})();