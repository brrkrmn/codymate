import { useEditorContext } from "@/context/editor/editorProvider";
import { Language } from "@/context/editor/editorProvider.types";
import { Select, SelectItem } from "@nextui-org/react";
import { langs } from "@uiw/codemirror-extensions-langs";

const LangSelect = () => {
  const { language, setLanguage } = useEditorContext();

  return (
    <Select
      fullWidth={false}
      size="sm"
      classNames={{
        base: "w-40",
        label:
          "text-foreground-100 text-xs group-data-[filled=true]:text-foreground-100",
        value:
          "text-foreground-50 group-data-[has-value=true]:text-foreground-50",
        trigger:
          "rounded-xl w-40 min-h-[38px] h-[38px] bg-content2 border-divider border-small hover:shadow-small data-[hover=true]:bg-content2 data-[focus-visible=true]:outline-0 transition",
        popoverContent: "bg-background p-0",
        listboxWrapper: "bg-content2 rounded-xl",
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
              base: "data-[selectable=true]:focus:bg-content2 data-[selectable=true]:focus:text-foreground-50 data-[selected=true]:border-small data-[selected=true]:border-divider data-[selected=true]:shadow-medium",
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
