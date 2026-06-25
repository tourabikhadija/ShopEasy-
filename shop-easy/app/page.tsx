import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  return (
    <div className="page-home">
      <section className="hero">
        <h1 className="hero-title">Découvrez le confort moderne</h1>
        <p className="hero-desc">
          Une sélection exclusive de mobilier haut de gamme pour sublimer votre
          intérieur. Chaque pièce est pensée pour allier esthétique et confort.
        </p>
      </section>

      <section className="catalogue">
        <h2 className="catalogue-title">Meilleures ventes</h2>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
