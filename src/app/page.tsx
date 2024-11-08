import { FeatureCard } from "@/components/FeatureCard";

export default function Home() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="flex gap-5 ">
          {/* {[1, 2, 3].map((id) => (
            <TeamCard key={id} />
          ))} */}
          <FeatureCard />
        </div>
      </div>
    </>
  );
}
