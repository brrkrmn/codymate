import { langs } from "@uiw/codemirror-extensions-langs";
import { ReactCodeMirrorProps } from "@uiw/react-codemirror";

export type EditorContextValue = null | {
  background: string;
  extensions: Extensions;
  gradient: string;
  language: Language;
  radius: string;
  theme: Theme;
  setBackground: (value: string) => void;
  setGradient: (value: string) => void;
  setLanguage: (value: Language) => void;
  setRadius: (value: string) => void;
  setTheme: (value: Theme) => void;
};

export type Extensions = ReactCodeMirrorProps["extensions"];
export type Theme = ReactCodeMirrorProps["theme"];
export type Language = keyof typeof langs;