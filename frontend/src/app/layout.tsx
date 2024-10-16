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
                    <Navbar />
                    {children}
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
