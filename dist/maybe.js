export var MaybeType;
(function (MaybeType) {
    MaybeType["Just"] = "MaybeType__Just";
    MaybeType["Nothing"] = "MaybeType__Nothing";
})(MaybeType || (MaybeType = {}));
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
export function Maybe(value) {
    return value === undefined || value == null
        ? Nothing()
        : Just(value);
}
