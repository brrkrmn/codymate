import CodeEditor from "@/components/CodeEditor/CodeEditor";
import { useSceneContext } from "@/context/scene";
import { Scene as SceneValue } from "@/context/scene/sceneProvider.types";

type ComponentProps = {
  scene: SceneValue;
};

const Scene = ({ scene }: ComponentProps) => {
  const { deleteScene } = useSceneContext();

  const onDeleteScene = () => {
    deleteScene(scene.number);
  };

  return (
    <div className="rounded-xl flex flex-col w-full">
      <p>Scene {scene.number}</p>
      {scene.number !== 0 && (
        <button onClick={onDeleteScene}>delete scene</button>
      )}
      <CodeEditor scene={scene} />
    </div>
  );
};

export default Scene;
