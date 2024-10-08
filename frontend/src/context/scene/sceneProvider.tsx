"use client";

import getDiff from "@/utils/getDiff";
import { EditorView } from "@uiw/react-codemirror";
import { createContext, useContext, useState } from "react";
import { Scene, SceneContextValue, Transaction } from "./sceneProvider.types";

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

  const createTransactions = () => {
    const newTransactions = [];

    for (let i = 0; i < scenes.length - 1; i++) {
      const oldScene = scenes[i].content;
      const newScene = scenes[i + 1].content;

      const transactions = getDiff(oldScene, newScene);

      if (transactions.length > 0) {
        newTransactions.push(...transactions);
      }
    }

    return newTransactions;
  };

  const dispatchTransactions = (
    editorView: EditorView,
    transactions: Transaction[],
  ) => {
    transactions.forEach((transaction, index) => {
      setTimeout(() => {
        editorView.dispatch({
          changes: {
            from: transaction.from,
            to: transaction.to,
            insert: transaction.insert,
          },
        });
      }, index * 100);
    });
  };

  return (
    <SceneContext.Provider
      value={{
        scenes,
        createScene,
        editScene,
        deleteScene,
        dispatchTransactions,
        createTransactions,
      }}
    >
      {children}
    </SceneContext.Provider>
  );
};

export default SceneProvider;
