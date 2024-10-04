/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEditorContext } from "@/context/editor/editorProvider";
import * as themes from "@uiw/codemirror-themes-all";
import CodeMirror from "@uiw/react-codemirror";

const CodeEditor = () => {
  const { theme, extensions } = useEditorContext();

  return (
    <div className="w-full h-full">
      <CodeMirror
        // @ts-ignore
        theme={themes[theme as keyof typeof themes]}
        extensions={extensions}
      />
    </div>
  );
};

export default CodeEditor;
