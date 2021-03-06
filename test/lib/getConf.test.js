'use strict';

var getConf = require('../../lib/getConf'),
    log = require('col'),
    fs = require('fs');

describe('getConf', sandbox(function () {


    describe('fetch', function () {

        beforeEach(function () {
            sandbox.stub(log);
            getConf.fetch();
        });

        describe('when no conf fie is present', function () {

            it('logs out an error and some info', function () {
                log.error.should.have.been.calledOnce;
                log.info.should.have.been.calledOnce;
            });

        });

        describe('when a conf file is present', function () {

            beforeEach(function () {

                sandbox.stub(fs, 'existsSync', function () {
                    return true;
                });

                sandbox.stub(fs, 'readFileSync', function () {
                    return '{ "foo": "bar" }';
                });

                sandbox.stub(getConf, 'parse', function (config) {
                    return config;
                });

            });

            it('returns the parsed conf file', function () {
                getConf.fetch().should.deep.equal(JSON.parse('{ "foo": "bar" }'));
            });

        });

    });

}));
