/*!
 * RADIUS.js
 * Copyright(c) 2011 Mark Wolfe <mark@wolfe.id.au>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */
var assert = require('assert');
var util = require('util');


function AccessResponse(options){

    if (!options)
        options = {};

    if (typeof(options) !== 'object')
        throw new TypeError('options must be an object');

}