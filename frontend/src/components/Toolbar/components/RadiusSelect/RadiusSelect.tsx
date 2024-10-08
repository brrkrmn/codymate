/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEditorContext } from "@/context/editor/editorProvider";

const RadiusSelect = () => {
  const { setRadius, radius } = useEditorContext();

  const radiusLabels = {
    0: "none",
    10: "xs",
    20: "sm",
    30: "md",
    40: "lg",
  };

  return (
    <>
      {/* @ts-ignore */}
      <div>{radiusLabels[radius]}</div>
      <input
        type="range"
        step="10"
        min="0"
        max="40"
        value={radius}
        id="radius-slider"
        onChange={(e) => setRadius(e.target.value)}
      />
    </>
  );
};

export default RadiusSelect;
