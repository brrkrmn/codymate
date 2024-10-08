import { useEditorContext } from "@/context/editor";
import { Theme } from "@/context/editor/editorProvider.types";
import { useSceneContext } from "@/context/scene";
import * as themes from "@uiw/codemirror-themes-all";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { useEffect, useRef } from "react";

const Preview = () => {
  const editorRef = useRef<EditorView | null>(null);
  const { isPreview, setIsPreview, dispatchTransactions, scenes } =
    useSceneContext();
  const { theme, extensions, background, gradient } = useEditorContext();

  useEffect(() => {
    dispatchTransactions(editorRef.current as EditorView);
  }, [isPreview]);

  return (
    <div
      className={`w-full h-full p-10`}
      style={{ backgroundColor: background, backgroundImage: gradient }}
    >
      <button onClick={() => setIsPreview(true)}>PREVIEW</button>
      <CodeMirror
        value={scenes[0].content}
        onCreateEditor={(editorView) => (editorRef.current = editorView)}
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
