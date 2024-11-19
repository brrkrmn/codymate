"use client";

import SceneFlow from "@/components/SceneFlow/SceneFlow";
import SceneTimeline from "@/components/SceneTimeline/SceneTimeline";
import Toolbar from "@/components/Toolbar/Toolbar";

const Editor = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-6 min-h-[90vh] h-full py-2">
      <Toolbar />
      <SceneFlow />
      <SceneTimeline />
    </div>
  );
};

export default Editor;
