import { Sidebar } from "@/components/Sidebar";
import Section from "../../components/Section";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <>
      <div className="w-[1320px] mx-auto pb-10 space-y-5 ">
        {/* <header className="text-center mt-5 text-2xl font-bold">
          Blog {id}
        </header> */}
        <div className="flex justify-around gap-5">
          <Section id={id} />
          {/* <span className="w-[220px]"></span> */}
          <Sidebar />
        </div>
      </div>
    </>
  );
}
