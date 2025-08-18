import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import ParticleBackground from "@/components/ParticleBackground";

const inter = Inter({
   subsets: ['latin'],
    variable: '--font-inter' 
});

const spaceGrotesk = Space_Grotesk({
   subsets: ['latin'],
    variable: '--font-spacegrotesk' 
})

export const metadata: Metadata = {
  title: "Bao-Huy's Personal Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning={true}
      >
        <ParticleBackground/>
        <NavBar />
        <main className="flex-1">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
