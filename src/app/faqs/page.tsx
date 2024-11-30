import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Faqs from "../../../public/images/faq.webp";
export default function page() {
  const items = [
    {
      value: "item-1",
      title: "What is Ecofresh, and how does it work?",
      content:
        "Ecofresh is an online platform that connects customers with fresh, organic vegetables and eco-friendly products. Simply browse our website, add items to your cart, and place an order. We’ll deliver healthy, sustainably-sourced produce right to your doorstep.",
    },
    {
      value: "item-2",
      title: "Why should I choose Ecofresh?",
      content:
        "Ecofresh ensures you get the freshest, 100% organic, and pesticide-free vegetables while supporting local farmers who practice sustainable agriculture. It's better for your health and the planet! ",
    },
    {
      value: "item-3",
      title: "How long does delivery take?",
      content:
        "Orders are typically delivered within 24-48 hours to ensure freshness. ",
    },
    {
      value: "item-4",
      title: "What should I do if I receive a damaged product?",
      content:
        "If any item is damaged or does not meet your expectations, contact our support team within 24 hours for a replacement or refund. ",
    },
    {
      value: "item-5",
      title: "How can I contact Ecofresh for help?",
      content:
        " You can reach us via email, live chat on our website, or by calling our customer support hotline. ",
    },
  ];

  return (
    <>
      <div className="flex justify-center">
        <section className="w-[648] h-[592] relative mr-[5.5rem] mt-[7rem]">
          <h1 className="text-4xl font-bold mb-4">FAQs</h1>
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
        <section className="justify-center items-center relative mt-16">
          <img
            // src="/images/faq.webp"
            src="https://www.claretschool.edu.ph/images/FAQs.png"
            alt="image-here"
          />
        </section>
      </div>
    </>
  );
}
