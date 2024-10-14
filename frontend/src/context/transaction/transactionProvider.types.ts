import { EditorView } from "@uiw/react-codemirror";

export type TransactionContextValue = null | {
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  duration: number;
  setEditorRef: (value: EditorView) => void;
};

export type Transaction = {
  from: number;
  to?: number;
  insert: string;
};