import { useEditorContext } from "@/context/editor/editorProvider";
import { Language } from "@/context/editor/editorProvider.types";
import { langs } from "@uiw/codemirror-extensions-langs";

const LangSelect = () => {
  const { language, setLanguage } = useEditorContext();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as Language)}
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
