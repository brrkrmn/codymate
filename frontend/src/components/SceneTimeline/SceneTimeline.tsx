import { useSceneContext } from "@/context/scene";
import { ScrollShadow } from "@nextui-org/react";
import { FaMapMarker } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";

const SceneTimeline = () => {
  const { scenes, createScene } = useSceneContext();

  const onCreateScene = () => {
    createScene(scenes[scenes.length - 1].content);
  };

  return (
    <div className="w-full py-2 flex flex-col items-center justify-center gap-2 overflow-x-scroll">
      <p className="text-foreground-100 font-semibold">scene 1</p>
      <div className="relative w-full h-1 border-t-small border-divider flex items-center justify-center">
        <FaMapMarker className="text-red-700" />
        <hr className="absolute h-24 border-[0.2px] rounded-lg top-0 border-red-700 z-50"></hr>
      </div>
      <ScrollShadow
        isEnabled={true}
        offset={0}
        className="w-full pb-6 flex items-center justify-start gap-4 snap-x snap-mandatory px-[50%]"
        hideScrollBar={true}
        size={100}
        orientation="horizontal"
      >
        {scenes.map((scene) => (
          <div
            key={scene.number}
            className="border-small border-divider bg-content2 shadow-large w-28 h-16 grow-0 shrink-0 rounded-xl snap-always snap-center flex items-center justify-center"
          >
            <p>{scene.number}</p>
          </div>
        ))}
        <button
          onClick={onCreateScene}
          className="w-24 h-10 rounded-2xl mx-4 flex items-center justify-center gap-1 shrink-0 border-2 border-red-700 text-red-600 font-semibold hover:border-red-800 hover:text-red-700 transition"
        >
          <IoMdAdd className="h-6 w-6" />
          <p className="">new</p>
        </button>
      </ScrollShadow>
      <button className="text-xl text-foreground-100 flex items-center justify-center transition hover:text-2xl hover:text-red-700">
        <FaRegTrashCan />
      </button>
    </div>
  );
};

export default SceneTimeline;
