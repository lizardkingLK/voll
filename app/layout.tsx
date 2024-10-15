import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/themes/ThemeProvider";
import { Roboto_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });
const overlay = "bg-[url('/assets/dot.svg')]";

export const metadata: Metadata = {
  title: "Voll",
  description: "Draw your diagrams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(robotoMono.className, overlay)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
