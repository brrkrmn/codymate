"use client";

import Filter from "@/components/DashboardComponents/Filter/Filter";
import SceneCard from "@/components/DashboardComponents/SceneCard/SceneCard";
import Sort from "@/components/DashboardComponents/Sort/Sort";
import { useScenesContext } from "@/context/scenes";
import { useCreateScene } from "@/hooks/useScene";
import { createDefaultScene } from "@/utils/createDefaultScene";
import { Button } from "@nextui-org/react";
import { useIsMutating } from "@tanstack/react-query";
import { useMemo } from "react";
import { FaPlus } from "react-icons/fa6";

const Page = () => {
  const defaultScene = useMemo(() => {
    return createDefaultScene();
  }, []);
  const createMutation = useCreateScene();
  const { filteredScenes } = useScenesContext();
  const isCreating = useIsMutating({ mutationKey: ["createScene"] });

  const onCreate = () => {
    createMutation.mutate(defaultScene);
  };

  return (
    <div className="w-full h-full min-h-screen flex flex-col items-start justify-start gap-6 py-6">
      <div className="w-full flex items-center justify-center laptop:justify-start gap-2 flex-wrap">
        <div className="flex items-center justify-center gap-2">
          <Sort />
          <Filter />
        </div>
        <Button
          variant="bordered"
          size="md"
          onPress={onCreate}
          className="flex items-center justify-center gap-2 h-[36px] w-fit px-5 py-1 rounded-full border-small border-divider bg-content1 text-foreground-100 hover:text-foreground-50 shadow-large transition"
          startContent={
            isCreating === 0 ? <FaPlus className="w-4 h-4" /> : null
          }
          isLoading={isCreating !== 0}
        >
          <p>Create Scene</p>
        </Button>
      </div>
      <div className="flex items-center justify-center laptop:justify-start w-full gap-6 flex-wrap">
        {filteredScenes?.map((scene) => (
          <SceneCard key={scene.id} scene={scene} />
        ))}
      </div>
    </div>
  );
};

export default Page;
