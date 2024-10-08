"use client";

import ColorSelect from "@/components/ColorSelect/ColorSelect";
import CreateScene from "@/components/CreateScene/CreateScene";
import LangSelect from "@/components/LangSelect/LangSelect";
import RadiusSelect from "@/components/RadiusSelect/RadiusSelect";
import ThemeSelect from "@/components/ThemeSelect/ThemeSelect";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start gap-4 min-h-screen p-20">
      <div className="flex items-center justify-center w-full gap-10">
        <ThemeSelect />
        <LangSelect />
        <RadiusSelect />
        <ColorSelect />
      </div>
      <CreateScene />
    </div>
  );
}