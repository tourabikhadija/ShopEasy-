import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "SERENIA — Mobilier de luxe",
  description: "Boutique en ligne de mobilier haut de gamme",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          <div className="site-wrapper">
            <Header />
            <main className="main">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
