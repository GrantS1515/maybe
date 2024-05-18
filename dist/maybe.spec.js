import { expect } from "chai";
import { Just, MaybeType, Nothing, Maybeify } from "./maybe.js";
describe("using the maybe type", () => {
    it("Can successfully return just a value", () => {
        function sucessFn() {
            return Just(5);
        }
        const maybeVal = sucessFn();
        switch (maybeVal.type) {
            case MaybeType.Just:
                expect(maybeVal.value).to.equal(5);
                break;
            case MaybeType.Nothing:
                expect.fail("Should not be nothing");
                break;
        }
    });
    it("Can successfully return just a value", () => {
        function failFn() {
            return Nothing();
        }
        const maybeVal = failFn();
        switch (maybeVal.type) {
            case MaybeType.Just:
                expect.fail("Should not get a value");
                break;
            case MaybeType.Nothing:
                break;
        }
    });
    it("Maybeify a defined value", () => {
        const maybeVal = Maybeify(5);
        switch (maybeVal.type) {
            case MaybeType.Just:
                expect(maybeVal.value).to.equal(5);
                break;
            case MaybeType.Nothing:
                expect.fail("Should not be nothing");
                break;
        }
    });
    it("Maybeify a null value", () => {
        const maybeVal = Maybeify(null);
        switch (maybeVal.type) {
            case MaybeType.Just:
                expect.fail("Should not get a value");
                break;
            case MaybeType.Nothing:
                break;
        }
    });
    it("Maybeify an undefined value", () => {
        const maybeVal = Maybeify(undefined);
        switch (maybeVal.type) {
            case MaybeType.Just:
                expect.fail("Should not get a value");
                break;
            case MaybeType.Nothing:
                break;
        }
    });
});
