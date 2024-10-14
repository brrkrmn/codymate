"use client";

import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div>
      <button onClick={() => signIn("google", { redirectTo: "/" })}>
        Signin with Google
      </button>
      <button onClick={() => signIn("github", { redirectTo: "/" })}>
        Signin with GitHub
      </button>
    </div>
  );
};

export default Login;
