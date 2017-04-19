'use strict';
const EventEmitter = require('./eventEmitter');
const Utils = require('./utils');

const app = [1,4,3];

EventEmitter.on('reversed', function(res){
    console.log(res);
});

EventEmitter.on('reversed', function(res){
    console.log(res);
});

Utils.reverse(app);