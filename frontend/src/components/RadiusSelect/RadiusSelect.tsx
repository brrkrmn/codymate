import { useEditorContext } from "@/context/editor/editorProvider";

const RadiusSelect = () => {
  const { setRadius, radius } = useEditorContext();

  return (
    <>
      <div>{radius}</div>
      <input
        type="range"
        min="0"
        max="100"
        value={radius}
        id="radius-slider"
        onChange={(e) => setRadius(e.target.value)}
      />
    </>
  );
};

export default RadiusSelect;
