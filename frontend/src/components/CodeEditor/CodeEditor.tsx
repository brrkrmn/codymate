import { Theme } from "@/context/editor/editorContext.types";
import { useEditorContext } from "@/context/editor/editorProvider";
import { EditorView } from "@codemirror/view";
import * as themes from "@uiw/codemirror-themes-all";
import CodeMirror from "@uiw/react-codemirror";
import { useRef } from "react";

const CodeEditor = () => {
  const editorRef = useRef<EditorView | null>(null);
  const {
    theme,
    extensions,
    background,
    gradient,
    code,
    transactions,
    onChange,
  } = useEditorContext();

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
        value={code}
        onChange={onChange}
        onCreateEditor={(editorView) => (editorRef.current = editorView)}
        theme={themes[theme as keyof typeof themes] as Theme}
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
