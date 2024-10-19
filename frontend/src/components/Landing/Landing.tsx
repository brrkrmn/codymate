import { signIn } from "next-auth/react";

const Landing = () => {
  return (
    <div>
      <div>landing</div>
      <button onClick={() => signIn("google", { redirectTo: "/" })}>
        Signin with Google
      </button>
      <button onClick={() => signIn("github", { redirectTo: "/" })}>
        Signin with GitHub
      </button>
    </div>
  );
};

export default Landing;
