/*!
 * RADIUS.js
 * Copyright(c) 2011 Mark Wolfe <mark@wolfe.id.au>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */
var assert = require('assert');
var buffer = require('buffer');
var protocol = require('../protocol.js');
var crypto = require('crypto');

var md5sum = crypto.createHash('md5');


function AccessRequest(options){

    assert.ok(options);

    if (!options)
        options = {};

    if (typeof(options) !== 'object')
        throw new TypeError('options must be an object');

    console.log(options);

    var requestBuffer = new Buffer(4);

    requestBuffer.writeUInt8(protocol.ACCESS_REQUEST, 0);
    requestBuffer.writeUInt8(11, 1);
    requestBuffer.writeUInt8(0, 2);
    requestBuffer.writeUInt8(0, 3);

    console.log(requestBuffer);

    md5sum.update(requestBuffer);

    console.log(md5sum.digest('hex'));

    var random = crypto.random();

}

module.exports = AccessRequest;