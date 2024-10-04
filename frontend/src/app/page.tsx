"use client";

import CodeEditor from "@/components/CodeEditor/CodeEditor";
import LangSelect from "@/components/LangSelect/LangSelect";
import ThemeSelect from "@/components/ThemeSelect/ThemeSelect";

export default function Home() {
  return (
    <div className="flex items-center justify-center gap-4 min-h-screen p-20">
      <ThemeSelect />
      <LangSelect />
      <CodeEditor />
    </div>
  );
}