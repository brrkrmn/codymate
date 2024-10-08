import ColorSelect from "./components/ColorSelect/ColorSelect";
import LangSelect from "./components/LangSelect/LangSelect";
import RadiusSelect from "./components/RadiusSelect/RadiusSelect";
import ThemeSelect from "./components/ThemeSelect/ThemeSelect";

const Toolbar = () => {
  return (
    <div className="flex items-center justify-center w-full gap-10">
      <ThemeSelect />
      <LangSelect />
      <RadiusSelect />
      <ColorSelect />
    </div>
  );
};

export default Toolbar;
