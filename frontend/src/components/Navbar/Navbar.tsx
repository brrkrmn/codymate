"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const Navbar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleOpenEditor = () => {
    const id = uuidv4();
    router.push(`/editor/${id}`);
  };

  if (status === "loading") return null;

  return (
    <div className="flex gap-4">
      <Link href="/">CODYMATE</Link>
      <button onClick={handleOpenEditor}>Editor</button>
      {session?.user ? (
        <button onClick={() => signOut()}>Log out</button>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default Navbar;
