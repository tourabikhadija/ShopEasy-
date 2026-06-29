"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="header">
      <div className="header-inner">
         <Image
          src="/logo.png"
          alt="SERENIA"
          width={70}
          height={70}
        />

        <nav className="nav">

          <Link href="/" className="nav-link">
            Home
          </Link>

          <Link href="/products" className="nav-link">
            products
          </Link>

          <Link href="/about" className="nav-link">
            about
          </Link>
           </nav>
           
          <Link href="/carte" className="nav-cart">
          <Image
            src="/carte.png"
            alt="carte"
            width={32}
            height={32}
          />
          </Link>

        
      </div>
    </header>
  );
}
