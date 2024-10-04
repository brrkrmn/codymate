import EditorProvider from "@/context/editor/editorProvider";
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
        <EditorProvider>{children}</EditorProvider>
      </body>
    </html>
  );
}
