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

  const createScene = (initialValue?: string) => {
    setScenes((prevScenes) => [
      ...prevScenes,
      { number: scenes.length + 1, content: initialValue || "" },
    ]);
  };

  const editScene = (updatedScene: Scene) => {
    setScenes((prevScenes) =>
      prevScenes.map((scene) =>
        scene.number === updatedScene.number ? updatedScene : scene,
      ),
    );
  };

  const deleteScenes = (...sceneNumbers: number[]) => {
    setScenes((prevScenes) => {
      if (sceneNumbers.length === 0) {
        return [];
      }
      return prevScenes.filter((scene) => !sceneNumbers.includes(scene.number));
    });
  };

  return (
    <SceneContext.Provider
      value={{ scenes, createScene, editScene, deleteScenes }}
    >
      {children}
    </SceneContext.Provider>
  );
};

export default SceneProvider;
