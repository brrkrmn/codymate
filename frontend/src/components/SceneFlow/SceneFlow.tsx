import { useSceneContext } from "@/context/scene";
import CodeEditor from "../CodeEditor/CodeEditor";

const SceneFlow = () => {
  const { scenes, createScene } = useSceneContext();

  const onClick = () => {
    createScene(scenes[scenes.length - 1].content);
  };

  return (
    <div>
      {scenes.map((scene) => (
        <CodeEditor scene={scene} />
      ))}
      <button onClick={onClick}>Create</button>
    </div>
  );
};

export default SceneFlow;
