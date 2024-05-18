export var MaybeType;
(function (MaybeType) {
    MaybeType["Just"] = "MaybeType__Just";
    MaybeType["Nothing"] = "MaybeType__Nothing";
})(MaybeType || (MaybeType = {}));
export function Just(v) {
    return {
        type: MaybeType.Just,
        value: v
    };
}
export function Nothing() {
    return {
        type: MaybeType.Nothing,
    };
}
export function Maybeify(val) {
    if (val === null) {
        return Nothing();
    }
    else if (val === undefined) {
        return Nothing();
    }
    else {
        return Just(val);
    }
}
