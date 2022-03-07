// function type
export interface IHandleSetPhase {
  (phase: moviePhaseTypes): void;
}

//literal types for navlink.ts
const ONE = 1;
const TWO = 2;
const THREE = 3;
const SHOWALL = 'SHOWALL';

// used to pass the exact literal type to functions (like an enum but more futureproof)
export const moviePhaseValues = {
  one: ONE,
  two: TWO,
  three: THREE,
  showAll: SHOWALL,
} as const;

//union type of literals for function parameter types
export type moviePhaseTypes = typeof ONE | typeof TWO | typeof THREE | typeof SHOWALL;
