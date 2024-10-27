import Navbar from "@/components/Navbar/Navbar";
import EditorProvider from "@/context/editor/editorProvider";
import SceneProvider from "@/context/scene/sceneProvider";
import SnippetProvider from "@/context/snippet/snippetProvider";
import TransactionProvider from "@/context/transaction/transactionProvider";
import { NextUIProvider } from "@nextui-org/react";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodyMate",
  description: "Give life to your code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <NextUIProvider>
          <SnippetProvider>
            <EditorProvider>
              <SceneProvider>
                <TransactionProvider>
                  <SessionProvider>
                    <main className="w-full min-h-screen px-2 tablet:px-4 laptop:px-40 max-w-[1600px] mx-auto">
                      <Navbar />
                      {children}
                    </main>
                  </SessionProvider>
                </TransactionProvider>
              </SceneProvider>
            </EditorProvider>
          </SnippetProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
