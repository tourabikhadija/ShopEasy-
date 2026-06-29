import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="page-home">
      <section className="hero">
        <Image
        src="/hero-img.jpg"
        alt="SERENIA"
            fill
        className="hero-img"
        priority
        />
         <div className="hero-content">
        <h1>Découvrez le confort moderne</h1>
        <p>"Découvrez des canapés de haute qualité, conçus pour le confort et le style, afin d’embellir votre intérieur moderne."  </p>
      </div>
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
