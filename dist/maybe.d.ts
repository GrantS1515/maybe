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
declare function Just<T>(v: T): Just<T>;
declare function Nothing(): Nothing;
export declare function Maybe<T>(value: T | undefined | null): Maybe<T>;
export {};
