export type SceneContextValue = null | {
  scenes: Scene[];
  createScene: (initialValue?: string) => void;
  editScene: (updatedScene: Scene) => void;
  deleteScene: (sceneNumber: number) => void;
};

export type Scene = {
  number: number;
  content: string;
};
