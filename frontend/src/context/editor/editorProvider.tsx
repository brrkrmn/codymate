"use client";
import { ReactCodeMirrorProps } from "@uiw/react-codemirror";
import { createContext, useContext, useState } from "react";
import { EditorContextValue } from "./editorContext.types";

export const EditorContext = createContext<EditorContextValue>(null);

export const useEditorContext = () => {
  const context = useContext(EditorContext);
  if (context === null) {
    throw new Error("You can only call this hook inside EditorProvider");
  }
  return context;
};

const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ReactCodeMirrorProps["theme"]>();

  return (
    <EditorContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
