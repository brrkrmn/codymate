import { useSceneContext } from "@/context/scene";
import Preview from "./components/Preview/Preview";
import Scene from "./components/Scene/Scene";

const SceneFlow = () => {
  const { scenes, createScene } = useSceneContext();

  const onClick = () => {
    createScene(scenes[scenes.length - 1].content);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex gap-10">
        <div className="flex gap-10 overflow-x-scroll w-[800px]">
          {scenes.map((scene) => (
            <Scene scene={scene} key={scene.number} />
          ))}
        </div>
        <button onClick={onClick}>Create Scene</button>
      </div>

      <Preview />
    </div>
  );
};

export default SceneFlow;
