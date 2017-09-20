"use strict";
var physiojs = require('../dist/cjs/physiojs');
var chai_1 = require('chai');
// declare var global;
// global.XMLHttpRequest = require('xhr2');
var fs = require('fs');
describe("loader", function () {
    it("Loads sample file", function () {
        var dto = "2017-04-15T19:13:38.1264+02:00";
        chai_1.expect(4).to.be.equal(physiojs.DateConverter.convertDateTimeOffsetToDate(dto));
    });
});
//# sourceMappingURL=Loader.Tests.js.map