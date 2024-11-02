import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="flex gap-5 ">
          {[1, 2, 3, 4, 5].map((id) => (
            <Button
              key={id}
              variant={"default"}
              size={"icon"}
              rightIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              }
            >
              {/* Button {id} */}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}
