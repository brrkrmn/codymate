export type SceneContextValue = null | {};

export type Change = {
  fromA: number;
  toA: number;
  fromB: number;
  toB: number;
  insert: string;
};

export type Transaction = {
  from: number;
  to?: number;
  insert: string;
};

export type Scene = {
  number: number;
  content: string;
};