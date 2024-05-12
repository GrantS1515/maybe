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

export function Just<T>(v: T): Just<T> {
	return {
		type: MaybeType.Just,
		value: v
	}
}

export function Nothing(): Nothing {
	return {
		type: MaybeType.Nothing,
	}
}