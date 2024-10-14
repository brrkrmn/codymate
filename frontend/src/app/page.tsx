"use client";

import Dashboard from "@/components/Dashboard/Dashboard";
import Landing from "@/components/Landing/Landing";
import { useSession } from "next-auth/react";

export default function Home() {
  const { status } = useSession();

  if (status === "loading") return null;
  else if (status === "authenticated") return <Dashboard />;
  else if (status === "unauthenticated") return <Landing />;
}