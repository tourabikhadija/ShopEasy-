import ProductCard from "@/components/ProductCard";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  slug: string;
};

// 👇 data مثال (من بعد تقدر تبدلها بـ API)
const products: Product[] = [
  {
    id: 1,
    name: "Classic Shoes",
    price: 2250,
    image: "/products/sofa1.png.jpg",
    slug: "classic-shoes",
  },
  {
    id: 2,
    name: "Sport Shoes",
    price: 6300,
    image: "/products/sofa2.png.jpg",
    slug: "sport-shoes",
  },
  {
    id: 3,
    name: "Casual Shoes",
    price: 7180,
    image: "/products/sofa3.png.jpg",
    slug: "casual-shoes",
  },
   {
    id: 4,
    name: "Casual Shoes",
    price: 4000,
    image: "/products/sofa4.png.jpg",
    slug: "casual-shoes",
  },
   {
    id: 5,
    name: "Casual Shoes",
    price: 5000,
    image: "/products/sofa5.png.jpg",
    slug: "casual-shoes",
  },
   {
    id: 6,
    name: "Casual Shoes",
    price: 8000,
    image: "/products/sofa6.png.jpg",
    slug: "casual-shoes",
  },
];

export default function ProductsPage() {
  return (
    <main className="products-container">
      <h1 className="products-title">Our Products</h1>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}