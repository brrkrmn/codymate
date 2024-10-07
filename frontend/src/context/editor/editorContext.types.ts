import { langs } from "@uiw/codemirror-extensions-langs";
import { ReactCodeMirrorProps, ViewUpdate } from "@uiw/react-codemirror";

export type EditorContextValue = null | {
  theme: Theme;
  setTheme: (value: Theme) => void;
  language: Language;
  setLanguage: (value: Language) => void;
  extensions: Extensions;
  radius: string;
  setRadius: (value: string) => void;
  background: string;
  setBackground: (value: string) => void;
  gradient: string;
  setGradient: (value: string) => void;
  transactions: Transaction[];
  code: string;
  onChange: (value: string, update: ViewUpdate) => void;
  scenes: Scene[];
  setScenes: (value: Scene[]) => void;
};

export type Extensions = ReactCodeMirrorProps["extensions"];
export type Theme = ReactCodeMirrorProps["theme"];
export type Language = keyof typeof langs;

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