import { Metadata } from "next";
import "./globals.css";
import "@/style/tailwind/tailwind.theme.css"
import { pretendard } from "@/style/font/font";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "SangA Project",
  description: "재밌게 공부하는 Next 16!"
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn(pretendard.variable, "font-sans", geist.variable)}>
      <body className="font-pretendard">{children}</body>
    </html>
  );
}
