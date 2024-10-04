/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEditorContext } from "@/context/editor/editorProvider";
import * as themes from "@uiw/codemirror-themes-all";
import CodeMirror from "@uiw/react-codemirror";

const CodeEditor = () => {
  const { theme } = useEditorContext();

  return (
    <div className="w-full h-full">
      {/* @ts-ignore */}
      <CodeMirror theme={themes[theme as keyof typeof themes]} />
    </div>
  );
};

export default CodeEditor;
