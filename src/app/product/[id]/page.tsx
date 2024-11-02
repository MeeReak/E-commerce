import ProductCard from "@/app/components/atoms/Product-card";
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
          rating={5}
        />
      </div>
    </>
  );
}
