import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const outfitFont = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Money Minds",
  description: "Ease your Budget mangement and Financial planning",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfitFont.className} antialiased`}>
          <Toaster />
          <SignedOut></SignedOut>
          <SignedIn></SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
