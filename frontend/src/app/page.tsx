"use client";

import Dashboard from "@/components/Dashboard/Dashboard";
import Landing from "@/components/Landing/Landing";

export default function Home() {
  const user = true;
  return (
    <div className="flex flex-col items-center justify-start gap-4 min-h-screen p-20">
      {user ? <Dashboard /> : <Landing />}
    </div>
  );
}