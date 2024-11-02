"use client";
import { Extension } from "@codemirror/state";
import { langs } from "@uiw/codemirror-extensions-langs";
import { EditorView } from "@uiw/react-codemirror";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useSnippetContext } from "../snippet";
import { EditorContextValue, Language, Theme } from "./editorProvider.types";

export const EditorContext = createContext<EditorContextValue>(null);

export const useEditorContext = () => {
  const context = useContext(EditorContext);
  if (context === null) {
    throw new Error("You can only call this hook inside EditorProvider");
  }
  return context;
};

const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>();
  const [language, setLanguage] = useState<Language>("javascript");
  const [radius, setRadius] = useState("8");
  const [background, setBackground] = useState("#2b2b2b");
  const [gradient, setGradient] = useState("");
  const pathname = usePathname();
  const { editSnippet, currentSnippet } = useSnippetContext();

  const id = pathname.split("/")[2];

  useEffect(() => {
    if (!currentSnippet) {
      return;
    }

    setTheme(currentSnippet?.theme);
    setLanguage(currentSnippet?.language as Language);
    setRadius(currentSnippet?.borderRadius as string);
    setBackground(currentSnippet?.backgroundColor as string);
  }, [pathname]);

  useEffect(() => {
    editSnippet({ id, theme });
  }, [theme]);

  useEffect(() => {
    editSnippet({ id, language });
  }, [language]);

  useEffect(() => {
    editSnippet({ id, borderRadius: radius });
  }, [radius]);

  useEffect(() => {
    editSnippet({ id, backgroundColor: background });
  }, [background]);

  const themeExt = EditorView.theme({
    "&.cm-editor": {
      outline: "none",
      borderRadius: `${radius}px`,
    },
    ".cm-scroller": {
      borderRadius: `${radius}px`,
      padding: "20px 20px",
    },
    ".cm-line": {
      borderRadius: `${radius}px`,
    },
  });

  const extensions: Extension[] = useMemo(() => {
    return [langs[language](), themeExt];
  }, [language, radius]);

  return (
    <EditorContext.Provider
      value={{
        theme,
        setTheme,
        language,
        setLanguage,
        extensions,
        radius,
        setRadius,
        background,
        setBackground,
        gradient,
        setGradient,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
