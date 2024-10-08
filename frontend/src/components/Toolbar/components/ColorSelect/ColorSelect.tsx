import { useEditorContext } from "@/context/editor/editorProvider";

const ColorSelect = () => {
  const { background, setBackground, gradient, setGradient } =
    useEditorContext();

  const onGradientChange = (e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    if (!value.includes("gradient")) {
      console.log("Please proide a correct gradient value.");
    }
    value = value.split(";")[0];
    if (value.includes(":")) {
      value = value.split(":")[1];
    }
    setGradient(value);
  };

  return (
    <>
      <label htmlFor="color">Select Color</label>
      <input
        id="color"
        type="color"
        value={background}
        onChange={(e) => setBackground(e.target.value)}
      />
      <label>Paste your gradient</label>
      <input
        type="text"
        id="gradient"
        value={gradient}
        onChange={onGradientChange}
      />
    </>
  );
};

export default ColorSelect;
