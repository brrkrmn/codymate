import { useEditorContext } from "@/context/editor";
import { Theme } from "@/context/editor/editorProvider.types";
import { useSceneContext } from "@/context/scene";
import * as themes from "@uiw/codemirror-themes-all";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { useRef, useState } from "react";

const Preview = () => {
  const editorRef = useRef<EditorView | null>(null);
  const { dispatchTransactions, scenes, createTransactions } =
    useSceneContext();
  const { theme, extensions, background, gradient } = useEditorContext();
  const [value, setValue] = useState("");

  const onChange = (val: string) => {
    setValue(val);
  };

  const onCreate = (editorView: EditorView) => {
    editorRef.current = editorView;

    editorRef.current.dispatch({
      changes: { from: 0, insert: scenes[0].content },
    });

    const transactions = createTransactions();
    dispatchTransactions(editorRef.current, transactions);
  };

  return (
    <div
      className={`w-full h-full p-10`}
      style={{ backgroundColor: background, backgroundImage: gradient }}
    >
      <CodeMirror
        value={value}
        onChange={onChange}
        onCreateEditor={onCreate}
        theme={themes[theme as keyof typeof themes] as Theme}
        extensions={extensions}
        editable={false}
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
        }}
      />
    </div>
  );
};

export default Preview;
