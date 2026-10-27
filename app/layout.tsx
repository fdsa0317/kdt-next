import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SangA Project",
  description: "재밌게 공부하는 Next 16!"
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
