import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({
  weight: ["300", "400", "500", "700"],
  variable: "--inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.className} antialiased dark`}>
        <main className="min-h-screen flex flex-col overflow-hidden h-full w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
