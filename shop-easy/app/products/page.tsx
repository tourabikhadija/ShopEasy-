"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const product = products.find((p) => p.slug === slug);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="not-found">
        <h2>Produit introuvable</h2>
        <Link href="/" className="btn-primary">
          Retour à l&apos;accueil
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="page-product">
      <Link href="/" className="back-link">
        ← Retour au catalogue
      </Link>

      <div className="product-detail">
        <div className="product-detail-img">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={450}
            className="detail-img"
          />
        </div>

        <div className="product-detail-info">
          <span className="product-category-badge">{product.category}</span>
          <h1 className="detail-name">{product.name}</h1>
          <p className="detail-price">{product.price.toLocaleString()} DH</p>
          <p className="detail-desc">{product.description}</p>

          <button
            onClick={handleAdd}
            className={`btn-primary ${added ? "btn-added" : ""}`}
          >
            {added ? "✓ Ajouté au panier" : "Ajouter au panier"}
          </button>

          <Link href="/cart" className="btn-cart-link">
            Voir mon panier →
          </Link>
        </div>
      </div>
    </div>
  );
}
