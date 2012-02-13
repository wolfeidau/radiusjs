/*!
 * RADIUS.js
 * Copyright(c) 2011 Mark Wolfe <mark@wolfe.id.au>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */
var assert = require('assert');
var Protocol = require('./protocol');

var AuthRequest = require('messages/access_request.js');
var AuthResponse = require('messages/access_response.js');

function getResponse(req) {
    assert.ok(req);

    switch (req.radiusOp) case:
        Protocol.ACCESS_REQUEST;

        Response = AuthResponse;

        break;
        default:
            return null
    }


    var Response;
}

function Server(options) {

}

