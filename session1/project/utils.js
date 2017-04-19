var _ = require('lodash');
var EventEmitter = require('./eventEmitter');

var constval = 10;

function reverse(arr){
    var result = _.reverse(arr);
    EventEmitter.emit('reversed', result);
};

function add(par1, par2){
    return par1+ par2 + constval;
};


module.exports = {
  reverse:   reverse,
  add: add
};