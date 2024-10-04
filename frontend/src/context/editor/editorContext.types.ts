import { ReactCodeMirrorProps } from "@uiw/react-codemirror";

export type EditorContextValue = null | {
  theme: Theme;
  setTheme: (value: Theme) => void;
};

export type Theme = ReactCodeMirrorProps["theme"];
