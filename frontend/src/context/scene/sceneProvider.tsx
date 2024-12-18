"use client";

import { createContext, useContext, useState } from "react";
import { Scene, SceneContextValue } from "./sceneProvider.types";

export const SceneContext = createContext<SceneContextValue>(null);

export const useSceneContext = () => {
  const context = useContext(SceneContext);
  if (context === null) {
    throw new Error("You can only call this hook inside SceneProvider.");
  }
  return context;
};

const SceneProvider = ({ children }: { children: React.ReactNode }) => {
  const [scenes, setScenes] = useState<Scene[]>([
    {
      number: 0,
      content: "",
    },
  ]);
  const [currentSceneNumber, setCurrentSceneNumber] = useState(0);

  const createScene = (initialValue = "") => {
    setScenes((prevScenes) => [
      ...prevScenes,
      { number: scenes.length, content: initialValue },
    ]);
  };

  const editScene = (updatedScene: Scene) => {
    setScenes((prevScenes) =>
      prevScenes.map((scene) =>
        scene.number === updatedScene.number ? updatedScene : scene,
      ),
    );
  };

  const deleteCurrentScene = () => {
    if (scenes.length === 1) {
      return;
    }

    setScenes((prevScenes) =>
      prevScenes
        .filter((scene) => scene.number !== currentSceneNumber)
        .map((scene) =>
          scene.number < currentSceneNumber
            ? scene
            : { ...scene, number: scene.number - 1 },
        ),
    );

    setCurrentSceneNumber(
      currentSceneNumber === scenes.length - 1
        ? currentSceneNumber - 1
        : currentSceneNumber,
    );
  };

  return (
    <SceneContext.Provider
      value={{
        scenes,
        createScene,
        editScene,
        deleteCurrentScene,
        currentSceneNumber,
        setCurrentSceneNumber,
      }}
    >
      {children}
    </SceneContext.Provider>
  );
};

export default SceneProvider;
