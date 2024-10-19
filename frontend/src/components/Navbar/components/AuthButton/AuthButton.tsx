import { buttonStyles, buttonTextStyles } from "@/styles";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { LuLogOut } from "react-icons/lu";

const AuthButton = () => {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <button className={buttonStyles} onClick={() => signOut()}>
        <LuLogOut className={buttonTextStyles} />
      </button>
    );
  } else {
    return (
      <Link href="/login" className={buttonStyles}>
        <p className={buttonTextStyles}>Login</p>
      </Link>
    );
  }
};

export default AuthButton;
