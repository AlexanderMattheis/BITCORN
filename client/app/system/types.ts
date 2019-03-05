export type Indexable<T extends (string | number), U> = { [index in T]: U };
export type Listener<T, U> = (event: T) => U;
