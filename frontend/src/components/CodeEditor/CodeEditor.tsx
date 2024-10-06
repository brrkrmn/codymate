import { Theme } from "@/context/editor/editorContext.types";
import { useEditorContext } from "@/context/editor/editorProvider";
import getTransactionFromChange, {
  Transaction,
} from "@/utils/getTransactionFromChange";
import { EditorView, ViewUpdate } from "@codemirror/view";
import * as themes from "@uiw/codemirror-themes-all";
import CodeMirror from "@uiw/react-codemirror";
import { useCallback, useRef, useState } from "react";

export type Change = {
  fromA: number;
  toA: number;
  fromB: number;
  toB: number;
  insert: string;
};

const CodeEditor = () => {
  const editorRef = useRef<EditorView | null>(null);
  const { theme, extensions, background, gradient, code, setCode } =
    useEditorContext();
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

  const onClick = () => {
    transactions.forEach((transaction, index) => {
      setTimeout(() => {
        editorRef.current?.dispatch({
          changes: {
            from: transaction.from,
            to: transaction.to,
            insert: transaction.insert,
          },
        });
      }, index * 100);
    });
  };

  return (
    <div
      className={`w-full h-full p-10 rounded-lg`}
      style={{ backgroundColor: background, backgroundImage: gradient }}
    >
      <CodeMirror
        theme={themes[theme as keyof typeof themes] as Theme}
        onChange={onChange}
        value={code}
        onCreateEditor={(editorView) => (editorRef.current = editorView)}
        extensions={extensions}
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
        }}
      />
      <button onClick={onClick}>Click</button>
    </div>
  );
};

export default CodeEditor;
