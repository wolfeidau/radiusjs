/*!
 * RADIUS.js
 * Copyright(c) 2011 Mark Wolfe <mark@wolfe.id.au>
 * MIT Licensed
 */

var AccessRequest = require('../lib/messages/access_request');




describe('AccessRequest', function(){
    describe('Parse', function(){
        it('should parse a valid request without error', function(){
             var req = new
                 AccessRequest({UserName: 'bob'});
        });
    });
});