import { useSceneContext } from "@/context/scene";
import { useTransactionContext } from "@/context/transaction/transactionProvider";
import { PlayerRef } from "@remotion/player";
import { useEffect, useRef } from "react";
import Scene from "./components/Scene/Scene";

const SceneFlow = () => {
  const playerRef = useRef<PlayerRef>(null);
  const { scenes } = useSceneContext();
  const { setIsPlaying } = useTransactionContext();

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

  return (
    <div className="flex h-full flex-col items-center justify-center w-full overflow-x-scroll">
      <div className="flex items-center justify-center overflow-x-scroll">
        {scenes.map((scene) => (
          <Scene scene={scene} key={scene.number} />
        ))}
      </div>
      {/* <button onClick={onPlay} disabled={isPlaying}>
        preview
      </button> */}
      {/* <Player
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
      /> */}
    </div>
  );
};

export default SceneFlow;
