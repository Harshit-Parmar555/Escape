import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter, Poppins } from "next/font/google";
import { SITE_CONFIG } from "@/config/index";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = SITE_CONFIG;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen max-w-full overflow-x-hidden bg-background text-foreground antialiased",
          inter.variable,
          poppins.variable,
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
