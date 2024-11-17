"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Feature } from "@/components/Feature";
import { DonationCard } from "@/components/DonationCard";
import { Faq } from "@/components/Faq";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Home = () => {
  const donationCards = Array(6).fill({
    title: "Help a Family with Children in Need",
    description:
      "In carrying out their duties, charitable foundations food, medicine, food, ",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    amount: "$20",
    goal: "$5,000",
    progress: "$3,200",
  });

  return (
    <div className="min-h-screen bg-[#F9F5E8]">
      {/* Hero Section */}
      <Header />
      <Hero />

      {/* Feature Section */}
      <Feature />

      {/* Donation Cards */}
      <section className="py-24 bg-[#F9F5E8]">
        {/* <NewDonationCard /> */}
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Let&apos;s Give Help To Those In Need
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {donationCards.map((card, index) => (
              <DonationCard key={index} {...card} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Faq />

      <Newsletter />

      <Footer />
    </div>
  );
};

export default Home;
