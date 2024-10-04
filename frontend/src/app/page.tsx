"use client";

import CodeEditor from "@/components/CodeEditor/CodeEditor";
import ColorSelect from "@/components/ColorSelect/ColorSelect";
import LangSelect from "@/components/LangSelect/LangSelect";
import RadiusSelect from "@/components/RadiusSelect/RadiusSelect";
import ThemeSelect from "@/components/ThemeSelect/ThemeSelect";

export default function Home() {
  return (
    <div className="flex items-center justify-center gap-4 min-h-screen p-20">
      <div className="flex flex-col items-center gap-10">
        <ThemeSelect />
        <LangSelect />
        <RadiusSelect />
        <ColorSelect />
      </div>
      <CodeEditor />
    </div>
  );
}