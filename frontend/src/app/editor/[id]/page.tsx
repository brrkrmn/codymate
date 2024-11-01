"use client";

import SceneFlow from "@/components/SceneFlow/SceneFlow";
import Toolbar from "@/components/Toolbar/Toolbar";

const Editor = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-4 min-h-screen py-10">
      <Toolbar />
      <SceneFlow />
    </div>
  );
};

export default Editor;
