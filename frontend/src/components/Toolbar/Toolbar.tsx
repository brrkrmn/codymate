import ColorPicker from "./components/ColorPicker/ColorPicker";
import LangSelect from "./components/LangSelect/LangSelect";
import RadiusSelect from "./components/RadiusSelect/RadiusSelect";
import ThemeSelect from "./components/ThemeSelect/ThemeSelect";

const Toolbar = () => {
  return (
    <div className="flex items-center justify-center gap-2 w-full h-14 py-2 border-small border-divider rounded-xl bg-content2 px-4 bg-mainGradient">
      <LangSelect />
      <ThemeSelect />
      <RadiusSelect />
      <ColorPicker />
    </div>
  );
};

export default Toolbar;
