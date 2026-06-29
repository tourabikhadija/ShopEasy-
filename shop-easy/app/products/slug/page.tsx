export default function ProductDetails({ params }: any) {
  return (
    <div>
      <h1>Product details</h1>
      <p>Slug: {params.slug}</p>
    </div>
  );
}