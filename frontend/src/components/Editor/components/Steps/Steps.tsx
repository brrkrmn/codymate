import { useSceneContext } from "@/context/scene";
import { Step } from "@/services/scene/scene.types";
import { ScrollShadow, Tooltip } from "@nextui-org/react";
import { createRef, useEffect } from "react";
import { FaMapMarker } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { IoInformation } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";

const Steps = () => {
  const { changedScene, updateScene, currentStepNumber, setCurrentStepNumber } =
    useSceneContext();

  const createStep = () => {
    const id = uuidv4();
    const newSteps = [
      ...(changedScene?.steps || []),
      {
        id,
        content:
          changedScene?.steps?.[changedScene.steps.length - 1]?.content || "",
      } as Step,
    ];

    updateScene({ steps: newSteps });
    setCurrentStepNumber(newSteps.length - 1);
  };

  const deleteStep = () => {
    updateScene({
      steps: changedScene?.steps.filter(
        (step, index) => index !== currentStepNumber
      ),
    });

    if (currentStepNumber === changedScene!.steps.length - 1) {
      setCurrentStepNumber(currentStepNumber - 1);
    }
  };

  useEffect(() => {
    if (!stepRefs[currentStepNumber]?.current) {
      return;
    }

    stepRefs[currentStepNumber].current?.scrollIntoView({
      block: "nearest",
      inline: "center",
      behavior: "smooth",
    });
  }, [currentStepNumber]);

  const stepRefs = Object.fromEntries(
    changedScene?.steps?.map((_, index) => [
      index,
      createRef<HTMLButtonElement>(),
    ]) || []
  );

  return (
    <div className="relative w-full py-2 flex flex-col items-center justify-center gap-2 overflow-x-scroll">
      <Tooltip
        placement="left"
        classNames={{
          base: "bg-background border-warning-200 border-1 text-warning-400 rounded-full",
        }}
        content="For best results, changes to multiple lines in the same step is not recommended."
      >
        <div className="hidden mobile:block absolute right-0 top-0 border-1 rounded-full p-1 text-warning-400 border-warning-200 px-3 transition hover:text-background hover:bg-warning-300">
          <IoInformation className="text-xl" />
        </div>
      </Tooltip>
      <p className="text-foreground-100 font-semibold">
        Step: {currentStepNumber}
      </p>
      <div className="relative w-full h-1 flex items-center justify-center">
        <FaMapMarker className="text-[#610726]" />
        <hr className="absolute h-24 border-[0.2px] rounded-lg top-0 border-[#610726] z-50"></hr>
      </div>
      <ScrollShadow
        isEnabled={true}
        offset={0}
        className="w-full pb-6 flex items-center justify-start gap-4 snap-x snap-mandatory px-[50%] scroll-smooth"
        hideScrollBar={true}
        size={100}
        orientation="horizontal"
      >
        {changedScene?.steps.map((step, index) => (
          <button
            ref={stepRefs[index]}
            onClick={() => setCurrentStepNumber(index)}
            key={index}
            className={`${
              index === currentStepNumber
                ? "scale-100 bg-content2"
                : "scale-90 bg-content1"
            } transition border-small border-divider shadow-large w-28 h-16 grow-0 shrink-0 rounded-xl snap-always snap-center flex items-center justify-center`}
          >
            <p>{index}</p>
          </button>
        ))}
        <button
          onClick={createStep}
          className="w-24 h-10 rounded-2xl mx-4 flex items-center justify-center gap-1 shrink-0 border-2 border-[#610726] text-[#610726] font-semibold transition"
        >
          <IoMdAdd className="h-6 w-6" />
          <p>new</p>
        </button>
      </ScrollShadow>
      <button
        onClick={deleteStep}
        className={`${
          changedScene?.steps.length === 1 ? "hidden" : "flex"
        } text-xl text-foreground-100 items-center justify-center transition hover:text-2xl hover:text-[#610726]`}
      >
        <FaRegTrashCan />
      </button>
    </div>
  );
};
export default Steps;
