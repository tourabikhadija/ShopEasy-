import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="product-card">
      <div className="product-card-img">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={280}
          className="product-img"
        />
      </div>
      <div className="product-card-body">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-footer">
          <span className="product-price">{product.price.toLocaleString()} DH</span>
          <Link href={`/products/${product.slug}`} className="btn-details">
            Voir détails
          </Link>
        </div>
      </div>
    </div>
  );
}
