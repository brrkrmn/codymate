"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Language, Theme } from "../editor/editorProvider.types";
import { Scene } from "../scene/sceneProvider.types";
import { Snippet, SnippetContextValue } from "./snippetProvider.types";

export const SnippetContext = createContext<SnippetContextValue>(null);

export const useSnippetContext = () => {
  const context = useContext(SnippetContext);
  if (context === null) {
    throw new Error("You can only call this hook inside SnippetProvider");
  }
  return context;
};

const SnippetProvider = ({ children }: { children: React.ReactNode }) => {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [filteredSnippets, setFilteredSnippets] = useState<Snippet[]>([]);
  const pathname = usePathname();

  const currentSnippet = useMemo(() => {
    const id = pathname.split("/").pop();
    const current = snippets.find((snippet) => snippet.id === id);
    return current ?? null;
  }, [pathname]);

  useEffect(() => {
    const data = localStorage.getItem("codymateSnippets");
    if (data) setSnippets(JSON.parse(data));
  }, []);

  useEffect(() => {
    if (snippets.length > 0) {
      localStorage.setItem("codymateSnippets", JSON.stringify(snippets));
    }
  }, [snippets]);

  const createSnippet = (id: string) => {
    const newSnippets = [
      ...snippets,
      {
        id,
        date: new Date(),
        title: "Undefined",
        language: "javascript" as Language,
        theme: "androidstudio" as Theme,
        borderRadius: "8px",
        backgroundColor: "#2b2b2b",
        scenes: [{ number: 0, content: "" }] as Scene[],
      },
    ];
    setSnippets(newSnippets);
  };

  const editSnippet = (snippet: Partial<Snippet>) => {
    setSnippets((prevSnippets) =>
      prevSnippets.map((snip) =>
        snip.id === snippet.id ? { ...snip, ...snippet } : snip,
      ),
    );
  };

  const deleteSnippet = (id: string) => {
    setSnippets((prevSnippets) =>
      prevSnippets.filter((snippet) => snippet.id !== id),
    );
  };

  return (
    <SnippetContext.Provider
      value={{
        snippets,
        createSnippet,
        editSnippet,
        deleteSnippet,
        currentSnippet,
        filteredSnippets,
        setFilteredSnippets,
      }}
    >
      {children}
    </SnippetContext.Provider>
  );
};

export default SnippetProvider;
