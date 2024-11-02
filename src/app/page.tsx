import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="flex gap-5 ">
          {[1, 2, 3, 4, 5].map((id) => (
            <Button key={id} variant="ghost" size={"large"}>
              Button {id}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}
