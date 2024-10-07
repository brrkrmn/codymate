import { useEditorContext } from "@/context/editor/editorProvider";
import CodeEditor from "../CodeEditor/CodeEditor";

const CreateScene = () => {
  const { scenes, setScenes } = useEditorContext();

  const createScene = () => {
    const newScenes = [...scenes, { number: scenes.length + 1, content: "" }];
    setScenes(newScenes);
  };

  return (
    <div className="flex flex-col">
      {scenes.map((scene) => (
        <CodeEditor key={scene.number} />
      ))}
      <button onClick={createScene}>CreateScene</button>
    </div>
  );
};

export default CreateScene;
