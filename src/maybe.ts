export enum MaybeType {
	Just = "MaybeType__Just",
	Nothing = "MaybeType__Nothing"
}

type Just<T> = {
	type: typeof MaybeType.Just,
	value:T
}

type Nothing = {
	type: typeof MaybeType.Nothing,
}

export type Maybe<T> = Just<T> | Nothing;

function Just<T>(v: T): Just<T> {
	return {
		type: MaybeType.Just,
		value: v
	}
}

function Nothing(): Nothing {
	return {
		type: MaybeType.Nothing,
	}
}

export function Maybe<T>(value: T | undefined | null): Maybe<T> {
	return value === undefined || value == null
		? Nothing()
		: Just(value)
}