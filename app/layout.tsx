import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hyaline Digital | Mobile App Development Company",
  description: "Hyaline Digital - Leading mobile app development company specializing in iOS, Android, and cross-platform applications",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body className="antialiased p-0 m-0 light" style={{ backgroundColor: '#fafafa' }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          forcedTheme="light"
          disableTransitionOnChange
        >
          {/* Outer container */}
          <div className="min-h-screen w-full relative light" style={{ backgroundColor: '#fafafa' }}>
            {/* Inner content area */}
            <div 
              className="min-h-screen mx-auto max-w-[1500px] bg-dark-primary relative light"
            >
              <Navigation />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

