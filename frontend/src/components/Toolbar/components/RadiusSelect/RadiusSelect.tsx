import { useEditorContext } from "@/context/editor/editorProvider";
import { RadioGroup } from "@nextui-org/react";
import CustomRadio from "./components/CustomRadio/CustomRadio";
import { radiusList } from "./constants";

const RadiusSelect = () => {
  const { setRadius, radius } = useEditorContext();

  return (
    <RadioGroup
      value={radius}
      onValueChange={setRadius}
      size="lg"
      label="Radius"
      orientation="horizontal"
      classNames={{
        base: "flex-row items-center justify-between h-full px-2 shrink-0 border-small rounded-xl bg-content2 border-divider",
        wrapper: "gap-4",
        label: "text-foreground-100 text-xs font-semibold m-0",
      }}
    >
      {radiusList.map((radius) => (
        <CustomRadio key={radius.value} radius={radius} />
      ))}
    </RadioGroup>
  );
};

export default RadiusSelect;
