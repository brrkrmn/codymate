import { EditorView } from "@uiw/react-codemirror";

export type SceneContextValue = null | {
  scenes: Scene[];
  createScene: (initialValue?: string) => void;
  editScene: (updatedScene: Scene) => void;
  deleteScene: (sceneNumber: number) => void;
  dispatchTransactions: (
    editorView: EditorView,
    transactions: Transaction[],
  ) => void;
  createTransactions: () => Transaction[];
};

export type Change = {
  fromA: number;
  toA: number;
  fromB: number;
  toB: number;
  insert: string;
};

export type Transaction = {
  from: number;
  insert: string;
};

export type Scene = {
  number: number;
  content: string;
};
