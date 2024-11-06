import { useEditorContext } from "@/context/editor/editorProvider";
import { Select, SelectItem } from "@nextui-org/react";
import * as themes from "@uiw/codemirror-themes-all";
import { ReactCodeMirrorProps } from "@uiw/react-codemirror";

const ThemeSelect = () => {
  const { theme, setTheme } = useEditorContext();

  const themeOptions = ["dark", "light"]
    .concat(Object.keys(themes))
    .filter((item) => typeof themes[item as keyof typeof themes] !== "function")
    .filter((item) => !/^(defaultSettings)/.test(item as keyof typeof themes))
    .filter(
      (item) =>
        !item.toLowerCase().includes("light") &&
        !item.toLowerCase().includes("dark") &&
        !item.toLowerCase().includes("style"),
    );

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
          "rounded-xl w-40 min-h-[38px] h-[38px] bg-content2 hover:shadow-small border-divider transition-all border-small data-[hover=true]:bg-content2 data-[focus-visible=true]:outline-0",
        popoverContent: "bg-background p-0",
        listboxWrapper: "bg-content2 rounded-xl",
      }}
      label="Theme"
      value={theme as string}
      onChange={(e) =>
        setTheme(e.target.value as ReactCodeMirrorProps["theme"])
      }
    >
      {themeOptions.map((item, key) => {
        return (
          <SelectItem
            classNames={{
              base: "data-[selectable=true]:focus:bg-content2 data-[selectable=true]:focus:text-foreground-50 data-[selected=true]:border-small data-[selected=true]:border-divider data-[selected=true]:shadow-medium",
            }}
            key={key}
          >
            {item}
          </SelectItem>
        );
      })}
    </Select>
  );
};

export default ThemeSelect;
