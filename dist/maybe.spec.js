import { expect } from "chai";
import { Maybe, MaybeType } from "./maybe.js";
describe("using the maybe type", () => {
    it("basic usage for nothing type", () => {
        // will return undefined, then transformed to nothing
        const maybeVal = Maybe(["A"].find(i => i == "B"));
        switch (maybeVal.type) {
            case MaybeType.Just:
                expect.fail("Should not have a true value");
                break;
            case MaybeType.Nothing:
                break;
        }
    });
    it("basic usage for just type", () => {
        const maybeVal = Maybe([1].find(i => i == 1));
        switch (maybeVal.type) {
            case MaybeType.Just:
                break;
            case MaybeType.Nothing:
                expect.fail("Should have a true value");
                break;
        }
    });
});
