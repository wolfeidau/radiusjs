/**
 * Module dependencies.
 */
var assert = require('assert');
var util = require('util');

function AuthRequest(options){

    if (!options)
        options = {};

    if (typeof(options) !== 'object')
        throw new TypeError('options must be an object');

}