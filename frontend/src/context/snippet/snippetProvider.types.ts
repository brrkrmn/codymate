import { Language, Theme } from "../editor/editorProvider.types";
import { Scene } from "../scene/sceneProvider.types";

export type SnippetContextValue = null | {
  snippets: Snippet[];
  createSnippet: (id: string) => void;
  editSnippet: (value: Partial<Snippet>) => void;
  deleteSnippet: (id: string) => void;
  currentSnippet: Snippet | null;
  filteredSnippets: Snippet[];
  setFilteredSnippets: (value: Snippet[]) => void;
};

export type Snippet = {
  id: string;
  date: Date;
  theme: Theme;
  language: Language;
  backgroundColor: string;
  borderRadius: string;
  title: string;
  scenes: Scene[];
};
