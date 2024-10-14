import Link from "next/link";

const Navbar = () => {
  const user = true;
  return (
    <div className="flex gap-4">
      <Link href="/">CODYMATE</Link>
      <Link href="/editor">Editor</Link>
      {user ? (
        <>
          <button>Log out</button>
          <Link href="/">Dashboard</Link>
        </>
      ) : (
        <>
          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
