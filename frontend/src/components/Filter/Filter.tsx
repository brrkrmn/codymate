import { Language } from "@/context/editor/editorProvider.types";
import { useSnippetContext } from "@/context/snippet";
import type { Selection } from "@nextui-org/react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { IoOptionsOutline } from "react-icons/io5";

const Filter = () => {
  const { snippets } = useSnippetContext();
  const [langs, setLangs] = useState<Language[]>([]);
  const [themes, setThemes] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));

  useEffect(() => {
    const uniqueLangs = Array.from(
      new Set(snippets.map((snippet) => snippet.language)),
    );

    const uniqueThemes = Array.from(
      new Set(snippets.map((snippet) => snippet.theme as string)),
    );

    setLangs(uniqueLangs);
    setThemes(uniqueThemes);
  }, []);

  const filteringOptions = [
    {
      title: "Filter by Language",
      items: langs.map((lang) => ({ key: lang, content: lang })),
    },
    {
      title: "Filter by Theme",
      items: themes.map((theme) => ({ key: theme, content: theme })),
    },
  ];

  return (
    <Dropdown
      backdrop="blur"
      classNames={{
        content: "bg-background shadow-medium",
      }}
    >
      <DropdownTrigger className="outline-none">
        <button className="w-fit px-4 flex items-center justify-center gap-2 border-small border-divider rounded-full bg-content1 text-foreground-100 transition hover:shadow-small hover:text-foreground-50">
          <IoOptionsOutline />
          <p>Filter</p>
        </button>
      </DropdownTrigger>
      <DropdownMenu
        closeOnSelect={false}
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        itemClasses={{
          base: "group text-foreground rounded-full px-4 border-divider border-small shadow-medium bg-content2 w-fit data-[selected=true]:shadow-large data-[selected=true]:text-foreground-50",
          selectedIcon: "absolute group-data-[selected=true]:relative",
        }}
        classNames={{
          base: "transition w-full tablet:max-w-96",
        }}
        variant="bordered"
        selectionMode="multiple"
      >
        {filteringOptions.map((section) => (
          <DropdownSection
            title={section.title}
            showDivider
            classNames={{
              base: "text-foreground-100",
              group: "flex gap-2 flex-wrap",
            }}
          >
            {section.items.map((item) => (
              <DropdownItem key={item.key}>{item.content}</DropdownItem>
            ))}
          </DropdownSection>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default Filter;
