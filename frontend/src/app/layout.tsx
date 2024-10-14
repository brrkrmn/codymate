import Navbar from "@/components/Navbar/Navbar";
import EditorProvider from "@/context/editor/editorProvider";
import SceneProvider from "@/context/scene/sceneProvider";
import TransactionProvider from "@/context/transaction/transactionProvider";
import type { Metadata } from "next";
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
        <EditorProvider>
          <SceneProvider>
            <TransactionProvider>
              <Navbar />
              {children}
            </TransactionProvider>
          </SceneProvider>
        </EditorProvider>
      </body>
    </html>
  );
}
