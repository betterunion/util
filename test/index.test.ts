import "mocha";
import {testMaps} from "./maps.test";
import {testNames} from "./names.test";
import {testPrivacy} from "./privacy.test";

describe("util", function() {
    describe("maps", testMaps);
    describe("names", testNames);
    describe("privacy", testPrivacy);
});