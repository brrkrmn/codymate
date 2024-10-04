/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEditorContext } from "@/context/editor/editorProvider";
import * as themes from "@uiw/codemirror-themes-all";
import CodeMirror from "@uiw/react-codemirror";

const CodeEditor = () => {
  const { theme, extensions, background, gradient } = useEditorContext();

  return (
    <div
      className={`w-full h-full p-10 rounded-lg`}
      style={{ backgroundColor: background, backgroundImage: gradient }}
    >
      <CodeMirror
        // @ts-ignore
        theme={themes[theme as keyof typeof themes]}
        extensions={extensions}
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
        }}
      />
    </div>
  );
};

export default CodeEditor;
