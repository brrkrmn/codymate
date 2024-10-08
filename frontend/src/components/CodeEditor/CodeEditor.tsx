import { useEditorContext } from "@/context/editor/editorProvider";
import { Theme } from "@/context/editor/editorProvider.types";
import { EditorView, ViewUpdate } from "@codemirror/view";
import * as themes from "@uiw/codemirror-themes-all";
import CodeMirror from "@uiw/react-codemirror";
import { useCallback, useRef, useState } from "react";

const CodeEditor = () => {
  const [value, setValue] = useState("");
  const editorRef = useRef<EditorView | null>(null);
  const { theme, extensions, background, gradient } = useEditorContext();

  const onChange = useCallback((val: string, update: ViewUpdate) => {
    setValue(val);
  }, []);

  return (
    <div
      className={`w-full h-full p-10 rounded-lg`}
      style={{ backgroundColor: background, backgroundImage: gradient }}
    >
      <CodeMirror
        value={value}
        onChange={onChange}
        onCreateEditor={(editorView) => (editorRef.current = editorView)}
        theme={themes[theme as keyof typeof themes] as Theme}
        extensions={extensions}
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
        }}
      />
    </div>
  );
};

export default CodeEditor;
