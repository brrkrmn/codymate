import { useEditorContext } from "@/context/editor/editorProvider";
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
    <select
      value={theme as string}
      onChange={(e) =>
        setTheme(e.target.value as ReactCodeMirrorProps["theme"])
      }
    >
      {themeOptions.map((item, key) => {
        return <option key={key}>{item}</option>;
      })}
    </select>
  );
};

export default ThemeSelect;
