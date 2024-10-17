"use client";

import { useSnippetContext } from "@/context/snippet";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NextNavBar,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LuLogOut } from "react-icons/lu";
import { v4 as uuidv4 } from "uuid";
import Logo from "../../../public/logo.svg";

const Navbar = () => {
  const { createSnippet } = useSnippetContext();
  const { data: session, status } = useSession();
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
        <NavbarContent>
          <NavbarItem>
            <button onClick={handleOpenEditor}>Editor</button>
          </NavbarItem>
          <NavbarItem className="ml-auto">
            {session?.user ? (
              <button
                className="group w-20 transition-all flex items-center justify-center border-small border-divider rounded-full h-8 shadow-medium hover:shadow-large"
                onClick={() => signOut()}
              >
                <LuLogOut className="text-foreground opacity-50 group-hover:opacity-100 transition" />
              </button>
            ) : (
              <Link
                href="/login"
                className="group w-20 transition flex items-center justify-center border-small border-divider rounded-full h-8 shadow-medium hover:shadow-large"
              >
                <p className="transition bg-clip-text bg-textGradient text-foreground-secondary opacity-80 group-hover:opacity-100">
                  Login
                </p>
              </Link>
            )}
          </NavbarItem>
        </NavbarContent>
      </NextNavBar>
    </div>
  );
};

export default Navbar;
