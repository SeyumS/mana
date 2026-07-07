import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ma'na",
  description: "ma'na",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
