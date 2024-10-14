import { useSceneContext } from "@/context/scene";
import { useTransactionContext } from "@/context/transaction/transactionProvider";
import { Player, PlayerRef } from "@remotion/player";
import { useEffect, useRef } from "react";
import Preview from "./components/Preview/Preview";
import Scene from "./components/Scene/Scene";

const SceneFlow = () => {
  const playerRef = useRef<PlayerRef>(null);
  const { scenes, createScene } = useSceneContext();
  const { setIsPlaying, duration, isPlaying } = useTransactionContext();

  useEffect(() => {
    if (!playerRef.current) {
      return;
    }

    playerRef.current.addEventListener("play", onPlay);
    playerRef.current.addEventListener("ended", onEnd);

    return () => {
      if (playerRef.current) {
        playerRef.current.removeEventListener("play", onPlay);
        playerRef.current.removeEventListener("ended", onEnd);
      }
    };
  }, []);

  const onPlay = () => {
    if (playerRef.current) {
      setIsPlaying(true);
      playerRef.current.play();
    }
  };

  const onEnd = () => {
    setIsPlaying(false);
  };

  const onCreateScene = () => {
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
        <button onClick={onCreateScene}>Create Scene</button>
      </div>
      <button onClick={onPlay} disabled={isPlaying}>
        preview
      </button>
      <Player
        ref={playerRef}
        component={Preview}
        durationInFrames={duration}
        compositionWidth={1920}
        compositionHeight={1080}
        fps={30}
        style={{
          width: 1280,
          height: 720,
        }}
      />
    </div>
  );
};

export default SceneFlow;
