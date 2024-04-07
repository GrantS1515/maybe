"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maybe = exports.MaybeType = void 0;
var MaybeType;
(function (MaybeType) {
    MaybeType["Just"] = "MaybeType__Just";
    MaybeType["Nothing"] = "MaybeType__Nothing";
})(MaybeType || (exports.MaybeType = MaybeType = {}));
function Just(v) {
    return {
        type: MaybeType.Just,
        value: v
    };
}
function Nothing() {
    return {
        type: MaybeType.Nothing,
    };
}
function Maybe(value) {
    return value === undefined || value == null
        ? Nothing()
        : Just(value);
}
exports.Maybe = Maybe;
