export type SceneContextValue = null | {
  scenes: Scene[];
  currentSceneNumber: number;
  setCurrentSceneNumber: (value: number) => void;
  createScene: (initialValue?: string) => void;
  editScene: (updatedScene: Scene) => void;
  deleteCurrentScene: () => void;
};

export type Scene = {
  number: number;
  content: string;
};
