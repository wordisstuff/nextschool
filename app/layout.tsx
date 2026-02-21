import Header from "@/components/Header/Header";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TanStackProvider>
      <html lang="en">
        <body>
          <Header />
          <main>{children}</main>
          <footer>Footer</footer>
        </body>
      </html>
    </TanStackProvider>
  );
}
