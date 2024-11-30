import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function page() {
  const items = [
    {
      value: "item-1",
      title: "In elementum est a ante sodales iaculis.",
      content:
        "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.",
    },
    {
      value: "item-2",
      title: "Etiam lobortis massa eu nibh tempor elementum.",
      content: "Don't have ",
    },
    {
      value: "item-3",
      title: "In elementum est a ante sodales iaculis.",
      content: "Don't have ",
    },
    {
      value: "item-4",
      title: "Aenean quis quam nec lacus semper dignissim.",
      content: "Don't have ",
    },
    {
      value: "item-5",
      title: "Nulla tincidunt eros id tempus accumsan.",
      content: "Don't have ",
    },
  ];

  return (
    <>
      <div className="flex justify-center">
        <section className="w-[648] h-[592] relative mr-[5.5rem] mt-[7rem]">
          <h1 className="text-4xl font-bold mb-4">
            Welcome, Let’s Talk <br />
            About Our Ecobazar
          </h1>
          <Accordion type="single" collapsible>
            {items.map(({ value, title, content }) => (
              <AccordionItem
                value={value}
                key={value}
                className="bg-gray-50 rounded p-2 grid grid-cols-1 gap-2"
              >
                <AccordionTrigger className="font-bold hover:no-underline hover:text-green-600">
                  {title}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 transition-all duration-300 ease-in-out">
                  {content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        <section className="justify-center items-center">
          <img
            className="w-[640px] h-[708px]"
            src="https://bcbmart.com/wp-content/uploads/2024/02/658e52a2-man_.png"
            alt="image-here"
          />
        </section>
      </div>
    </>
  );
}
