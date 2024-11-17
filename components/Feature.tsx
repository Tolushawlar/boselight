"use client";

import { motion } from "framer-motion";
import { Users2, HandHeart, Smile } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Feature() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="w-full bg-[#F9F5E8] space-y-8 py-12 md:py-16 lg:py-20">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        className="container px-4 md:px-6"
      >
        <Card className="overflow-hidden rounded-3xl border-none p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Boselight is an innovative online lending platform
              </h1>
              <p className="text-gray-500 md:text-lg">
                Offers fast, unsecured loans without the need for collateral.
                Once your application is completed, we can disburse funds within
                just minutes, with a maximum processing time of 24 hours,
                depending on your profile. Whether you need quick access to up
                to N5,000,000, Boselight is here to provide reliable financial
                solutions tailored to your needs. Experience the ease of Smart
                Money Solutions with Boselight.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                  About Us
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6"
                alt="Happy children making peace signs"
                width={100}
                height={100}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </Card>

        <motion.div variants={fadeInUp} className="mt-8">
          <Card className="overflow-hidden rounded-3xl border-none bg-blue-500 p-8 text-white">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold">How To Start Help</h2>
                <p className="mt-2 text-blue-100">
                  In carrying out their duties, charitable foundations provide a
                  variety of social services such as education, food, medicine,
                  housing, and others
                </p>
              </div>
              <motion.div
                variants={staggerChildren}
                className="grid gap-8 md:grid-cols-3"
              >
                {[
                  {
                    icon: Users2,
                    title: "Register Yourself",
                    description:
                      "Sign up to join and be part of the good people who love to share",
                  },
                  {
                    icon: HandHeart,
                    title: "Select Donate",
                    description:
                      "There are many things you can choose to share goodness with",
                  },
                  {
                    icon: Smile,
                    title: "Share Happiness",
                    description:
                      "Sharing happiness with those less and doing more good for others",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="text-center"
                  >
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-sm text-blue-100">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
