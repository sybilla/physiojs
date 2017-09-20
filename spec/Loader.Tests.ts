import * as physiojs from '../dist/cjs/physiojs';
import {expect} from 'chai';
declare var require;
// declare var global;

// global.XMLHttpRequest = require('xhr2');

var fs = require('fs');

describe("loader", () => {

    it("Loads sample file", () => {
        expect(4).to.be.equal(4);
    });
});