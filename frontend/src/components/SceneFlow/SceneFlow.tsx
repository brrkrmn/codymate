import { useSceneContext } from "@/context/scene";
import { Player } from "@remotion/player";
import { useState } from "react";
import Preview from "./components/Preview/Preview";
import Scene from "./components/Scene/Scene";

const SceneFlow = () => {
  const { scenes, createScene } = useSceneContext();
  const [isPreview, setIsPreview] = useState(false);
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
      <button onClick={() => setIsPreview(true)}>preview</button>
      {isPreview && (
        <Player
          component={Preview}
          durationInFrames={120}
          compositionWidth={1920}
          compositionHeight={1080}
          fps={30}
          style={{
            width: 1280,
            height: 720,
          }}
          controls
          showVolumeControls={false}
          allowFullscreen={false}
          clickToPlay={true}
          autoPlay
        />
      )}
    </div>
  );
};

export default SceneFlow;
