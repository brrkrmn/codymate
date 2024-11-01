import ColorSelect from "./components/ColorSelect/ColorSelect";
import LangSelect from "./components/LangSelect/LangSelect";
import RadiusSelect from "./components/RadiusSelect/RadiusSelect";
import ThemeSelect from "./components/ThemeSelect/ThemeSelect";

const Toolbar = () => {
  return (
    <div className="flex items-center justify-start w-full h-16 gap-4 border-small border-divider rounded-full bg-content2 px-2 bg-mainGradient">
      <LangSelect />
      <ThemeSelect />
      <RadiusSelect />
      <ColorSelect />
    </div>
  );
};

export default Toolbar;
