// import { OverView } from "@/components/OverView";
// import { ProductDetail } from "@/components/ProductDetail";
// import { RelateProduct } from "@/components/RelateProduct";

// export default async function Page(
//   {
//     //   params,
//     // }: {
//     //   params: Promise<{ id: string }>;
//   }
// ) {
//   // const id = (await params).id;
//   return (
//     <>
//       {/* <p>Product page: {id}</p> */}
//       <div className=" w-[1320px] mx-auto mb-12">
//         <OverView />
//         <ProductDetail />
//         <RelateProduct />
//       </div>
//     </>
//   );
// }

import { OverView } from "@/components/OverView";
import { ProductDetail } from "@/components/ProductDetail";
import { RelateProduct } from "@/components/RelateProduct";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <>
      {/* <p>Product page: {id}</p> */}
      <div className=" w-[1320px] mx-auto mb-12">
        <OverView id={id} />
        <ProductDetail id={id}/>
        <RelateProduct />
      </div>
    </>
  );
}
