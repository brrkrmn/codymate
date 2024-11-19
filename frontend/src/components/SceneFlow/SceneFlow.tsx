import { useEditorContext } from "@/context/editor";
import { useSceneContext } from "@/context/scene";
import { useTransactionContext } from "@/context/transaction/transactionProvider";
import { PlayerRef } from "@remotion/player";
import { useEffect, useRef } from "react";
import CodeEditor from "../CodeEditor/CodeEditor";

const SceneFlow = () => {
  const playerRef = useRef<PlayerRef>(null);
  const { scenes, currentSceneNumber } = useSceneContext();
  const { setIsPlaying } = useTransactionContext();
  const { background } = useEditorContext();

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
    <div className="flex w-full h-full flex-col items-center justify-center overflow-x-scroll">
      <div
        style={{ background }}
        className="px-4 py-8 tablet:p-10 shadow-large max-w-[800px] w-full rounded-xl flex items-center justify-center overflow-x-scroll"
      >
        <CodeEditor scene={scenes[currentSceneNumber]} />
      </div>
    </div>
  );
};

export default SceneFlow;
