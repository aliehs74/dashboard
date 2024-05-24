import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Create Next Dashboard",
  description: "this is a dashoard power by Next14, tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
