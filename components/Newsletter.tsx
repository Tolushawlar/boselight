/* eslint-disable react/jsx-key */
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const cardData = [
  {
    imageSrc: "/bg7.jpeg",
    title: "Tailored Financing",
    description:
      "If you have specialized financing needs, speak to one of our representatives today",
  },
  {
    imageSrc: "/bg6.jpeg",
    title: "Quick and Easy Loans",
    description: "Apply online in minutes and get a decision fast.",
  },
];

export function Newsletter() {
  return (
    <div className="min-h-screen p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Ready to take the next step?
        </h1>
        <p className="text-sm text-gray-600 mb-12">
          Apply online today and let us help you achieve your financial goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {cardData.map((card, i) => (
            <div className="grid grid-cols-1 md:grid-cols-0 gap-4">
              <div
                key={i}
                className="bg-white rounded-3xl p-6 shadow-sm max-h-[500px]"
              >
                <div className="mb-4 overflow-hidden rounded-2xl">
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    width={400}
                    height={30}
                    className="w-full h-96 object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {card.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">{card.description}</p>
                {/* <a href="#" className="text-blue-500 text-sm font-semibold">
                  Read Post →
                </a> */}
              </div>
            </div>
          ))}
        </div>
        <div id="contact" className="bg-[#E17153] rounded-3xl p-8 md:p-12 text-center">
          <div>
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
              Get in Touch With Us
            </h2>
            <p className="text-white text-lg mb-8">
              Stay in the loop with everything you need to know.
            </p>
          </div>
          <form className="flex gap-4 max-w-xl mx-auto bg-white rounded-full">
            <Input
              type="email"
              placeholder="Enter your email"
              className="rounded-l-full border-r-0 p-6"
            />
            <Button className="mt-[0.1px] md:w-[200px] w-[85px] bg-blue-500 hover:bg-blue-600 text-white rounded-full py-6 px-8 font-semibold">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
