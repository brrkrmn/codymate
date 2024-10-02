"use client";

import { createTheme } from "@uiw/codemirror-themes";
import CodeMirror from "@uiw/react-codemirror";

export default function Home() {
  const myTheme = createTheme({
    theme: "light",
    settings: {
      background: "#ffffff",
      backgroundImage: "",
      foreground: "#75baff",
      caret: "#5d00ff",
      selection: "#036dd626",
      selectionMatch: "#036dd626",
      lineHighlight: "#8a91991a",
      gutterBackground: "#fff",
      gutterForeground: "#8a919966",
    },
    styles: [],
  });

  return (
    <div className="flex items-center justify-center gap-4 min-h-screen p-20">
      <CodeMirror
        value="This is the first line of this code editor."
        height="400px"
        width="700px"
        basicSetup={{
          drawSelection: false,
          highlightActiveLine: false,
          highlightActiveLineGutter: false,
          foldGutter: false,
        }}
        theme={myTheme}
      />
      <div className="w-full h-full border-2"></div>
    </div>
  );
}
