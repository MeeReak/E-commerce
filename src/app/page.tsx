import { Hero } from "@/components/Hero";
import { Banners } from "@/components/Banners";
import { Categories } from "@/components/Categorys";
import { Featured } from "@/components/FeatureCard";
import { Products } from "@/components/Products";

export default function Home() {
  return (
    <>
      <div className=" w-[1320px] mx-auto space-y-5 h-[1000vh]">
        <Hero />
        <Featured />
        {/* Banner */}
        <Banners />
        {/* Category */}
        <Categories />
        {/* New Feature Products */}
        <Products />
      </div>
    </>
  );
}
