import ColorPicker from "./components/ColorPicker/ColorPicker";
import LangSelect from "./components/LangSelect/LangSelect";
import RadiusSelect from "./components/RadiusSelect/RadiusSelect";
import ThemeSelect from "./components/ThemeSelect/ThemeSelect";

const Toolbar = () => {
  return (
    <div className="flex items-center justify-center gap-2 w-full h-14 py-2 px-4">
      <LangSelect />
      <ThemeSelect />
      <RadiusSelect />
      <ColorPicker />
    </div>
  );
};

export default Toolbar;
