import { useEditorContext } from "@/context/editor/editorProvider";
import { Language } from "@/context/editor/editorProvider.types";
import { Select, SelectItem } from "@nextui-org/react";
import { langs } from "@uiw/codemirror-extensions-langs";

const LangSelect = () => {
  const { language, setLanguage } = useEditorContext();

  return (
    <Select
      radius="full"
      fullWidth={false}
      size="sm"
      classNames={{
        base: "w-40",
        label:
          "text-foreground-100 group-data-[filled=true]:text-foreground-100",
        value:
          "text-foreground-50 group-data-[has-value=true]:text-foreground-50",
        trigger:
          "w-40 bg-content1 data-[hover=true]:bg-content2 data-[focus-visible=true]:outline-0 shadow-small transition",
        popoverContent: "bg-background",
        listboxWrapper: "bg-content2 rounded-xl shadow-small",
      }}
      label="Language"
      value={language}
      onChange={(e) => setLanguage(e.target.value as Language)}
    >
      {Object.keys(langs)
        .sort()
        .map((option) => (
          <SelectItem
            classNames={{
              base: "data-[hover=true]:bg-content2",
              wrapper: "hover:bg-content2",
            }}
            key={option}
          >
            {option}
          </SelectItem>
        ))}
    </Select>
  );
};

export default LangSelect;
