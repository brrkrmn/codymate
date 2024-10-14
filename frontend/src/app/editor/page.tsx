"use client";

import SceneFlow from "@/components/SceneFlow/SceneFlow";
import Toolbar from "@/components/Toolbar/Toolbar";

const Editor = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-4 min-h-screen p-20">
      <Toolbar />
      <SceneFlow />
    </div>
  );
};

export default Editor;
