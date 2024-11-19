import OrderSummary from "@/components/OrderSummary";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <>
      <div>Product page: {id}</div>
      <div>
        <OrderSummary
          imageUrl="/images/watermelon.png"
          name="Watermelon"
          qty={10}
          price={5.0}
          ship="free"
        />
      </div>
    </>
  );
}
