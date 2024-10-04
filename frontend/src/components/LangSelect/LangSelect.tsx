import { useEditorContext } from "@/context/editor/editorProvider";
import { langs } from "@uiw/codemirror-extensions-langs";

const LangSelect = () => {
  const { language, setLanguage } = useEditorContext();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as keyof typeof langs)}
    >
      {Object.keys(langs)
        .sort()
        .map((option, key) => (
          <option key={key}>{option}</option>
        ))}
    </select>
  );
};

export default LangSelect;
