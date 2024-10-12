import EditorProvider from "@/context/editor/editorProvider";
import SceneProvider from "@/context/scene/sceneProvider";
import React from "react";
import { Composition } from "remotion";
import { PreviewComposition } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <EditorProvider>
      <SceneProvider>
        <Composition
          id="PreviewComposition"
          component={PreviewComposition}
          durationInFrames={60}
          fps={30}
          width={1280}
          height={720}
        />
      </SceneProvider>
    </EditorProvider>
  );
};
