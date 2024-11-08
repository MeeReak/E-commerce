import FeedBackCard from "@/app/components/atoms/FeedBackCard";
import ProductCard from "@/app/components/atoms/Product-card";
import ProductCardY from "@/app/components/atoms/ProductCard-y";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <>
      <div>Product page: {id}</div>;
      <div>
        <ProductCard
          title="Green Apple"
          price={14.99}
          imageUrl="/Apple.png"
          rating={4}
        />
        <ProductCard
          title="Banana"
          price={9.99}
          imageUrl="/Orange.png"
          rating={1}
        />
      </div>
      <div>
        <ProductCardY
          title="sjsjjs"
          price={100}
          rating={2}
          imgURl="/Orange.png"
        />
      </div>
      <div>
        <FeedBackCard name="Reak kak" rating={5} profile="/Apple.png" />
      </div>
    </>
  );
}
