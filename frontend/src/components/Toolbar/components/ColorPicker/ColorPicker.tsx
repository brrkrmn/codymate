import { useEditorContext } from "@/context/editor/editorProvider";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import ReactColorPicker from "react-best-gradient-color-picker";

const ColorPicker = () => {
  const { background, setBackground } = useEditorContext();

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
        <button className="flex items-center justify-center gap-4 border-small border-divider bg-content2 text-xs font-semibold h-full rounded-xl pl-4 pr-1 text-foreground-100 transition hover:shadow-small">
          <p className="line-clamp-1">Background Color</p>
          <span
            className="h-8 w-8 rounded-lg shrink-0"
            style={{ background: background }}
          ></span>
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <ReactColorPicker value={background} onChange={setBackground} />
      </PopoverContent>
    </Popover>
  );
};

export default ColorPicker;