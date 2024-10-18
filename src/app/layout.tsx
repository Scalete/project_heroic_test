import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/globals.scss";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BootstrapWrapper from "@/components/layout/bootstrap/BootstrapWrapper";

export const metadata: Metadata = {
  title: "Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BootstrapWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </BootstrapWrapper>
      </body>
    </html>
  );
}
