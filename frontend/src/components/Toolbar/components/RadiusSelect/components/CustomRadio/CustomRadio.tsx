import { Radio } from "@nextui-org/react";
import { Radius } from "../../types";

const CustomRadio = ({ radius }: { radius: Radius }) => {
  return (
    <Radio
      classNames={{
        base: "flex items-center justify-center p-0 h-10 max-w-10 w-10",
        wrapper: "border-0 hidden p-0",
        labelWrapper: `m-0 w-8 h-8 flex flex-row items-center justify-center group-data-[hover=true]:bg-content2 transition rounded-lg *:text-2xl *:text-foreground-50 group-data-[selected=true]:shadow-medium group-data-[selected=true]:bg-content2 group-data-[hover=true]:shadow-small`,
        control: "hidden",
      }}
      value={radius.value}
    >
      <radius.children />
    </Radio>
  );
};

export default CustomRadio;
