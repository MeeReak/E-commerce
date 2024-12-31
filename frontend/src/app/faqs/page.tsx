import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

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
    <div className="w-full max-w-screen-xl mx-auto pb-10 px-4">
      <div className="flex flex-col md:flex-row items-start gap-5 justify-center">
        {/* Accordion Section */}
        <section className="flex-1 md:w-[648px] md:h-[592px] relative mt-10 mb-10 md:mb-0">
          <h1 className="text-[rgb(26,26,26)] text-[48px] font-semibold pb-5 leading-[120%]">
            Welcome, Let&rsquo;s Talk About Our EcoFresh
          </h1>
          <Accordion type="single" collapsible className="space-y-3">
            {items.map(({ value, title, content }) => (
              <AccordionItem
                value={value}
                key={value}
                className="bg-[#F2F2F2] rounded-md"
              >
                <AccordionTrigger className="px-5 hover:no-underline focus:text-[#00B207] text-[#1A1A1A] text-base font-medium leading-[150%] focus:border focus:rounded-t-sm focus:border-[#84D187]">
                  {title}
                </AccordionTrigger>
                <AccordionContent className="px-5 pt-3 text-gray-600 text-base font-medium leading-[150%] transition-all duration-300 ease-in-out border rounded-b-sm border-[#84D187] border-t-0">
                  {content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Image Section */}
        <section className="justify-center items-center relative md:mt-16">
          <Image
            width={500}
            height={500}
            src="/svg/undraw_faq_re_31cw.svg"
            alt="FAQ illustration"
          />
        </section>
      </div>
    </div>
  );
}
