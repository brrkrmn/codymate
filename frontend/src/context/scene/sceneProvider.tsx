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

  const deleteScene = (sceneNumber: number) => {
    setScenes((prevScenes) =>
      prevScenes
        .filter((scene) => scene.number !== sceneNumber)
        .map((scene) =>
          scene.number < sceneNumber
            ? scene
            : { ...scene, number: scene.number - 1 },
        ),
    );
  };

  return (
    <SceneContext.Provider
      value={{ scenes, createScene, editScene, deleteScene }}
    >
      {children}
    </SceneContext.Provider>
  );
};

export default SceneProvider;
