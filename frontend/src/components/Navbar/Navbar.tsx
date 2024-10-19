"use client";

import { useSnippetContext } from "@/context/snippet";
import { buttonStyles } from "@/styles";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NextNavBar,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import Logo from "../../../public/logo.svg";
import AuthButton from "./components/AuthButton/AuthButton";

const Navbar = () => {
  const { createSnippet } = useSnippetContext();
  const { status } = useSession();
  const router = useRouter();

  const handleOpenEditor = () => {
    const id = uuidv4();
    router.push(`/editor/${id}`);
    createSnippet(id);
  };

  if (status === "loading") return null;

  return (
    <div className="w-full flex items-center mt-4 px-4 sticky top-4 inset-x-0">
      <NextNavBar
        maxWidth="lg"
        height="40px"
        isBordered
        classNames={{
          base: "!mx-auto rounded-full w-[1024px] border-divider border-small backdrop-blur-sm",
          wrapper: "rounded-full bg-content2 px-2 ",
        }}
      >
        <NavbarBrand>
          <Link href="/" className="ml-2">
            <Image src={Logo} alt="Logo" width={20} height={20} />
          </Link>
        </NavbarBrand>
        <NavbarContent className="ml-auto max-w-fit">
          <NavbarItem>
            <button onClick={handleOpenEditor} className={`${buttonStyles}`}>
              Playground
            </button>
          </NavbarItem>
          <NavbarItem>
            <AuthButton />
          </NavbarItem>
        </NavbarContent>
      </NextNavBar>
    </div>
  );
};

export default Navbar;
