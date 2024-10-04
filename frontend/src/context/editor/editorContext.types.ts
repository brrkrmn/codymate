import { langs } from "@uiw/codemirror-extensions-langs";
import { ReactCodeMirrorProps } from "@uiw/react-codemirror";

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
};

export type Extensions = ReactCodeMirrorProps["extensions"];
export type Theme = ReactCodeMirrorProps["theme"];
export type Language = keyof typeof langs;
