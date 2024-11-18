import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  return (
    <div className="min-h-screen p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Find Answers to Your Donation Questions
        </h1>
        <p className="text-sm text-gray-600 mb-12">
          Charitable foundations provide a variety of social services such as
          education, food, medicine, housing, and others
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="mb-4 overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
                  alt="Group of children smiling"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                10 Creative Ways to Raise Money for Your Favorite Charity
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur. Amet mattis tellus et as
                ectus orc.
              </p>
              <a href="#" className="text-blue-500 text-sm font-semibold">
                Read Post →
              </a>
            </div>
          ))}
        </div>
        <div className="bg-[#E17153] rounded-3xl p-8 md:p-12 text-center">
          <div>
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
              Sign up for our Newsletter
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
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-6 px-8 font-semibold">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
