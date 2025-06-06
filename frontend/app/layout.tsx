import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', 
  display: 'swap',
});

const merriweather = Merriweather({
  subsets: ['latin'],    
  weight: ['300','400', '700','900'],  
  style: ['normal', 'italic'],
  variable: '--font-merriweather',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Perfi - Finanzas Personales",
  description: "Mantén tus finanzas bajo control con PerFi, la aplicación de finanzas personales que te ayuda a gestionar tu dinero de manera efectiva.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen flex flex-col ${inter.variable} ${merriweather.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="flex flex-col min-h-screen size-full px-12">
            <Header />
            <main className="flex-1 pt-16 max-w-7xl mx-auto px-4">
              {children}
            </main>  
            <Footer />
          </div>  
        </ThemeProvider>  
      </body>
    </html>
  );
}
