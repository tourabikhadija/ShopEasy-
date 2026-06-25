"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice } =
    useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="cart-empty-icon">🛒</div>
        <h2>Votre panier est vide</h2>
        <p>Parcourez notre catalogue et ajoutez des produits.</p>
        <Link href="/" className="btn-primary">
          Voir le catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="page-cart">
      <h1 className="cart-title">
        <span className="cart-icon-title">🛒</span> My Cart
      </h1>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-img">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={80}
                  className="cart-img"
                />
              </div>
              <div className="cart-item-info">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">
                  {item.price.toLocaleString()} DH
                </p>
                <div className="qty-controls">
                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    aria-label="Diminuer la quantité"
                  >
                    −
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    aria-label="Augmenter la quantité"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="cart-remove"
                onClick={() => removeFromCart(item.id)}
                aria-label="Supprimer l'article"
              >
                🗑
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2 className="summary-title">Le nombre total d&apos;articles</h2>
          <div className="summary-lines">
            {cart.map((item) => (
              <div key={item.id} className="summary-line">
                <span className="summary-item-name">{item.name}</span>
                <span className="summary-item-price">
                  {(item.price * item.quantity).toLocaleString()} DH
                </span>
              </div>
            ))}
          </div>
          <div className="summary-divider" />
          <div className="summary-total">
            <span>Totale</span>
            <span className="total-price">{totalPrice.toLocaleString()} DH</span>
          </div>
          <p className="summary-count">{totalItems} article(s)</p>
          <button className="btn-primary btn-valide">Valide</button>
        </div>
      </div>
    </div>
  );
}
