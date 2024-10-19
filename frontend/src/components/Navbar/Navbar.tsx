"use client";

import { buttonStyles, buttonTextStyles } from "@/styles";
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
      <div className="w-full flex items-center sticky top-0">
        <NextNavBar
          maxWidth="full"
          height="40px"
          classNames={{
            base: "rounded-full backdrop-blur-sm py-4",
          }}
        >
          <NavbarBrand>
            <Link href="/">
              <Image src={Logo} alt="Logo" width={20} height={20} />
            </Link>
          </NavbarBrand>
          <NavbarContent className="ml-auto max-w-fit">
            <NavbarItem>
              <Tooltip content="Logout" closeDelay={0} delay={200}>
                <button className={buttonStyles} onClick={() => signOut()}>
                  <LuLogOut className={buttonTextStyles} />
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
