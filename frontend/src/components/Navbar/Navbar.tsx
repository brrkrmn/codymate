"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  return (
    <div className="flex gap-4">
      <Link href="/">CODYMATE</Link>
      <Link href="/editor">Editor</Link>
      {session?.user ? (
        <button onClick={() => signOut()}>Log out</button>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default Navbar;
