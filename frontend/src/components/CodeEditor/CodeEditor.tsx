import { useEditorContext } from "@/context/editor/editorProvider";
import { Theme } from "@/context/editor/editorProvider.types";
import { useSceneContext } from "@/context/scene";
import { Scene } from "@/context/scene/sceneProvider.types";
import { EditorView, ViewUpdate } from "@codemirror/view";
import * as themes from "@uiw/codemirror-themes-all";
import CodeMirror from "@uiw/react-codemirror";
import { useCallback, useEffect, useRef, useState } from "react";

const CodeEditor = ({ scene }: { scene: Scene }) => {
  const [value, setValue] = useState(scene.content as string | "");
  const editorRef = useRef<EditorView | null>(null);
  const { theme, extensions, background, gradient } = useEditorContext();
  const { editScene, deleteScene, scenes, dispatchTransactionsToEditor } =
    useSceneContext();

  useEffect(() => {
    setValue(scene.content);
  }, [scenes]);

  const onChange = useCallback((val: string, update: ViewUpdate) => {
    editScene({ ...scene, content: val });
  }, []);

  return (
    <div
      className={`w-full h-full p-10 rounded-lg`}
      style={{ backgroundColor: background, backgroundImage: gradient }}
    >
      <button onClick={() => deleteScene(scene.number)} className="text-white">
        delete scene
      </button>
      <button
        onClick={() =>
          dispatchTransactionsToEditor(editorRef.current as EditorView)
        }
      >
        animate
      </button>
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
