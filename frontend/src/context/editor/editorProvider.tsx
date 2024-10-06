"use client";
import getTransactionFromChange from "@/utils/getTransactionFromChange";
import { Extension } from "@codemirror/state";
import { langs } from "@uiw/codemirror-extensions-langs";
import { EditorView, ViewUpdate } from "@uiw/react-codemirror";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  Change,
  EditorContextValue,
  Language,
  Theme,
  Transaction,
} from "./editorContext.types";

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
  const [background, setBackground] = useState<string>("#000000c5");
  const [gradient, setGradient] = useState<string>("");
  const [code, setCode] = useState("");
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const onChange = useCallback((val: string, update: ViewUpdate) => {
    setCode(val);

    const changedRanges = (update as any).changedRanges[0];
    const change: Change = {
      fromA: changedRanges.fromA,
      toA: changedRanges.toA,
      fromB: changedRanges.fromB,
      toB: changedRanges.toB,
      insert: (update.changes as any).inserted.join(""),
    };

    setTransactions((prevTransactions) => [
      ...prevTransactions,
      getTransactionFromChange(change),
    ]);
  }, []);

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
        transactions,
        code,
        onChange,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
