import ProductCard from "./components/atoms/ProductCardX";
import { productCard as Product } from "@/utils/mockup";

export default function Home() {
  return (
    <>
      <div className="h-screen flex items-center gap-x-5 justify-center">
        {Product.map((product) => (
          <ProductCard
            key={product.id}
            imageUrl={product.src}
            price={product.price}
            rating={product.rating}
            title={product.name}
          />
        ))}
      </div>
    </>
  );
}
