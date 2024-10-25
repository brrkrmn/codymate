import type { Selection } from "@nextui-org/react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { useState } from "react";
import { TbArrowsSort } from "react-icons/tb";
import { sortingOptions } from "./constants";

const Sort = () => {
  const [selectedKey, setSelectedKey] = useState<Selection>(
    new Set(["dateNew"]),
  );

  return (
    <Dropdown
      backdrop="blur"
      classNames={{
        content: "bg-background shadow-medium",
      }}
    >
      <DropdownTrigger className="outline-none">
        <button className="w-fit px-4 flex items-center justify-center gap-2 border-small border-divider rounded-full bg-content1 text-foreground-100 transition hover:shadow-small hover:text-foreground-50">
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
          base: "text-foreground border-small",
        }}
        variant="bordered"
        selectionMode="single"
      >
        {sortingOptions.map((section) => (
          <DropdownSection
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
