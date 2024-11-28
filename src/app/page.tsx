import { Hero } from "@/components/Hero";
import { Banners } from "@/components/Banners";
import { Categories } from "@/components/Categorys";
import { Featured } from "@/components/FeatureCard";
import { Products } from "@/components/Products";
import Video from "@/components/Video";
import { Teams } from "@/components/Teams";
import { FeedBacks } from "@/components/FeedBacks";
import { Blogs } from "@/components/Blogs";

export default function Home() {
  return (
    <>
      <div className=" w-[1320px] mx-auto space-y-5">
        {/* Hero Section */}
        <Hero />
        {/* Featured Card */}
        <Featured />
        {/* Banner */}
        <Banners />
        {/* Category */}
        <Categories />
        {/* New Feature Products */}
        <Products />
        {/* Video */}
        <Video />
        {/* Blog New */}
        <Blogs />
        {/* Feedback from client */}
        <FeedBacks />
        {/* Team Card */}
        <Teams />
      </div>
    </>
  );
}
