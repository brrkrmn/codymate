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

  const getTransactions = () => {
    setScenes((prevScenes) => {
      const updatedScenes = [...prevScenes];

      for (let i = 0; i < updatedScenes.length - 1; i++) {
        const oldContent = updatedScenes[i].content;
        const newContent = updatedScenes[i + 1].content;

        const transactions = getDiff(oldContent, newContent);

        updatedScenes[i + 1] = {
          ...updatedScenes[i + 1],
          content: newContent,
          transactions,
        };
      }

      return updatedScenes;
    });
  };

  const dispatchTransactionsToEditor = (editorView: EditorView) => {
    getTransactions();

    const transactions: Transaction[] = [];
    scenes.map((scene) => {
      if (scene.transactions && scene.transactions.length > 0) {
        scene.transactions.map((transaction) => transactions.push(transaction));
      }
    });

    transactions.forEach((transaction, index) => {
      setTimeout(() => {
        editorView.dispatch({
          changes: {
            from: transaction.from,
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
        dispatchTransactionsToEditor,
      }}
    >
      {children}
    </SceneContext.Provider>
  );
};

export default SceneProvider;
