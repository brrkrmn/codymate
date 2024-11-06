"use client";

import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NextNavBar,
  Tooltip,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { LuLogOut } from "react-icons/lu";
import Logo from "../../../public/logo.svg";

const Navbar = () => {
  const { status } = useSession();

  if (status === "loading" || status === "unauthenticated") return null;
  if (status === "authenticated") {
    return (
      <div className="w-full flex items-center sticky top-0 z-50">
        <NextNavBar
          maxWidth="full"
          classNames={{
            base: "backdrop-blur-sm py-4",
            wrapper: "h-6 tablet:h-10 px-0",
          }}
        >
          <NavbarBrand>
            <Link href="/">
              <Image src={Logo} alt="Logo" width={20} height={20} />
            </Link>
          </NavbarBrand>
          <NavbarContent className="ml-auto max-w-fit">
            <NavbarItem>
              <Tooltip
                classNames={{
                  base: "font-thin text-foreground-50",
                }}
                content="Logout"
                closeDelay={0}
                delay={200}
              >
                <button
                  onClick={() => signOut()}
                  className="w-fit h-8 px-6 rounded-full flex items-center justify-center border-small border-divider shadow-medium transition hover:shadow-large"
                >
                  <LuLogOut className="bg-clip-text bg-textGradient text-foreground-50" />
                </button>
              </Tooltip>
            </NavbarItem>
          </NavbarContent>
        </NextNavBar>
      </div>
    );
  }
};

export default Navbar;
