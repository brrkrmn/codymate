import { useEditorContext } from "@/context/editor";
import { Theme } from "@/context/editor/editorProvider.types";
import { useSceneContext } from "@/context/scene";
import * as themes from "@uiw/codemirror-themes-all";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { useEffect, useRef, useState } from "react";

const Preview = () => {
  const editorRef = useRef<EditorView | null>(null);
  const { dispatchTransactions, scenes, createTransactions, isPlaying } =
    useSceneContext();
  const { theme, extensions, background, gradient } = useEditorContext();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!editorRef.current) {
      return;
    }

    if (isPlaying) {
      editorRef.current.dispatch({
        changes: { from: 0, insert: scenes[0].content },
      });

      const transactions = createTransactions();
      dispatchTransactions(editorRef.current, transactions);
    } else {
      editorRef.current.dispatch({
        changes: {
          from: 0,
          to: editorRef.current.state.doc.toString().length,
          insert: "",
        },
      });
    }
  }, [isPlaying]);

  return (
    <div
      className={`w-full h-full p-10`}
      style={{ backgroundColor: background, backgroundImage: gradient }}
    >
      <CodeMirror
        value={value}
        onChange={(val: string) => setValue(val)}
        onCreateEditor={(editorView: EditorView) =>
          (editorRef.current = editorView)
        }
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
