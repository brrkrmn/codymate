import { useSceneContext } from "@/context/scene";
import CodeEditor from "../CodeEditor/CodeEditor";

const SceneFlow = () => {
  const { scenes, createScene } = useSceneContext();

  return (
    <div>
      {scenes.map((scene) => (
        <CodeEditor scene={scene} />
      ))}
      <button onClick={() => createScene()}>CreateScene</button>
    </div>
  );
};

export default SceneFlow;
