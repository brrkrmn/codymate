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
import { TbArrowsSort } from "react-icons/tb";

const Sort = () => {
  const { setFilteredSnippets, filteredSnippets } = useSnippetContext();
  const [selectedKey, setSelectedKey] = useState<Selection>(
    new Set(["date-old"]),
  );

  useEffect(() => {
    const sortingKey = Array.from(selectedKey)[0];
    let sortedSnippets = filteredSnippets;

    if (sortingKey === "alphabetical-asc") {
      sortedSnippets = [...filteredSnippets].sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
      );
    } else if (sortingKey === "alphabetical-desc") {
      sortedSnippets = [...filteredSnippets].sort((a, b) =>
        b.title.toLowerCase().localeCompare(a.title.toLowerCase()),
      );
    } else if (sortingKey === "date-new") {
      sortedSnippets = [...filteredSnippets].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
    } else if (sortingKey === "date-old") {
      sortedSnippets = [...filteredSnippets].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    }
    setFilteredSnippets(sortedSnippets);
  }, [selectedKey]);

  const sortingOptions = [
    {
      title: "Sort by Title",
      items: [
        { key: "alphabetical-asc", content: "A - Z" },
        { key: "alphabetical-desc", content: "Z - A" },
      ],
    },
    {
      title: "Sort by Date",
      items: [
        { key: "date-new", content: "Newest first" },
        { key: "date-old", content: "Oldest first" },
      ],
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
        <button className="w-fit px-5 flex items-center justify-center gap-2 border-small border-divider rounded-full bg-content1 text-foreground-100 transition hover:shadow-small hover:text-foreground-50">
          <TbArrowsSort />
          <p>Sort</p>
        </button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        selectedKeys={selectedKey}
        onSelectionChange={setSelectedKey}
        defaultSelectedKeys={["dateNew"]}
        itemClasses={{
          base: "text-foreground border-small rounded-full data-[selected=true]:text-foreground-50 data-[selected=true]:shadow-large",
        }}
        variant="bordered"
        selectionMode="single"
      >
        {sortingOptions.map((section, index) => (
          <DropdownSection
            key={index}
            showDivider
            classNames={{ base: "text-foreground-100" }}
            title={section.title}
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

export default Sort;
