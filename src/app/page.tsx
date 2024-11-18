// import CartTotal from "@/components/CartTotal";
import OrderSummary from "@/components/OrderSummary";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        {/* <div className="flex gap-5 ">
          {[1, 2, 3].map((id) => (
          ))}
        </div>
         */}
        {/* <CartTotal price={100} ship="free" /> */}
        <OrderSummary price={100} ship="free" />
      </div>
    </>
  );
}
