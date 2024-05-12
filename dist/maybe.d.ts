export declare enum MaybeType {
    Just = "MaybeType__Just",
    Nothing = "MaybeType__Nothing"
}
type Just<T> = {
    type: typeof MaybeType.Just;
    value: T;
};
type Nothing = {
    type: typeof MaybeType.Nothing;
};
export type Maybe<T> = Just<T> | Nothing;
export declare function Just<T>(v: T): Just<T>;
export declare function Nothing(): Nothing;
export {};
