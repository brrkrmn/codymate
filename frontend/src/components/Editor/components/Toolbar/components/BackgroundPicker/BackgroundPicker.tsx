import { useSceneContext } from "@/context/scene";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import ReactColorPicker from "react-best-gradient-color-picker";

const BackgroundPicker = () => {
  const { changedScene, updateScene } = useSceneContext();

  if (!changedScene) return null;

  return (
    <Popover
      triggerScaleOnOpen={false}
      shouldBlockScroll={true}
      classNames={{
        content: "bg-content2 shadow-medium p-2",
        trigger: "outline-none",
      }}
    >
      <PopoverTrigger>
        <button className="h-11 min-h-11 flex items-center justify-center gap-4 border-small border-divider bg-content1 shadow-small text-xs font-semibold rounded-xl pl-4 pr-1 text-foreground-100 transition hover:shadow-large">
          <p className="line-clamp-1">Background Color</p>
          <span
            className="h-8 w-8 rounded-lg shrink-0"
            style={{ background: changedScene.background }}
          ></span>
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <ReactColorPicker
          value={changedScene.background}
          onChange={(val) => updateScene({ background: val })}
        />
      </PopoverContent>
    </Popover>
  );
};

export default BackgroundPicker;
