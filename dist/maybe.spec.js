"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const maybe_1 = require("./maybe");
describe("using the maybe type", () => {
    it("basic usage for nothing type", () => {
        // will return undefined, then transformed to nothing
        const maybeVal = (0, maybe_1.Maybe)(["A"].find(i => i == "B"));
        switch (maybeVal.type) {
            case maybe_1.MaybeType.Just:
                chai_1.expect.fail("Should not have a true value");
                break;
            case maybe_1.MaybeType.Nothing:
                break;
            // do not need below case in production
            default:
                chai_1.expect.fail("unexpected type found");
                break;
        }
    });
    it("basic usage for just type", () => {
        const maybeVal = (0, maybe_1.Maybe)([1].find(i => i == 1));
        switch (maybeVal.type) {
            case maybe_1.MaybeType.Just:
                break;
            case maybe_1.MaybeType.Nothing:
                chai_1.expect.fail("Should have a true value");
                break;
            // do not need below case in production
            default:
                chai_1.expect.fail("unexpected type found");
                break;
        }
    });
});
