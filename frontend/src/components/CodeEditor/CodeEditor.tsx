import { useEditorContext } from "@/context/editor/editorProvider";
import { Theme } from "@/context/editor/editorProvider.types";
import { useSceneContext } from "@/context/scene";
import { Scene } from "@/context/scene/sceneProvider.types";
import * as themes from "@uiw/codemirror-themes-all";
import CodeMirror from "@uiw/react-codemirror";
import { useCallback, useEffect, useState } from "react";

const CodeEditor = ({ scene }: { scene: Scene }) => {
  const { editScene, scenes } = useSceneContext();
  const [value, setValue] = useState(scene?.content || scenes[0].content);
  const { theme, extensions } = useEditorContext();

  useEffect(() => {
    setValue(scene.content);
  }, [scenes]);

  const onChange = useCallback((val: string) => {
    editScene({ ...scene, content: val });
  }, []);

  return (
    <div className={`w-full h-full p-10`}>
      <CodeMirror
        value={value}
        onChange={onChange}
        placeholder={
          scene?.number === 0
            ? "This will be the starting point of the video. Whatever written in this editor will not be animated. If you want to animate everything, create the first scene."
            : ""
        }
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
