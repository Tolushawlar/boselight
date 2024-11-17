"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Faq() {
  const faqItems = [
    {
      question: "How does Boselight work?",
      answer:
        "Boselight connects donors with people in need through a secure and transparent platform. We verify all cases and ensure your donation reaches the right person.",
    },
    {
      question: "Is my donation tax-deductible?",
      answer:
        "Yes, all donations made through Boselight are tax-deductible. You'll receive a receipt for your records immediately after your donation.",
    },
    {
      question: "How do you verify cases?",
      answer:
        "Our team thoroughly verifies each case through a multi-step process including document verification, personal interviews, and local partner validation.",
    },
  ];

  const [openItem, setOpenItem] = useState<number | null>(1);

  return (
    <div className="p-6 md:p-12 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-[#3a3a3a] sm:text-5xl xl:text-6xl mb-4">
              Find Answers to Your Donation Questions
            </h1>
            <p className="text-[#3a3a3a] text-lg">
              Et felis vitae ac venenatis lacus cras etiam risus scelerisque
              auctor adipiscing in a porta
            </p>
            <motion.svg
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-48 w-48 text-[#3b82f6] mt-8"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <motion.path
                d="M20 50 Q 40 20, 50 50 T 80 50"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M75 50 L 80 45 L 85 50"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 1.8 }}
              />
            </motion.svg>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-white"
                  onClick={() => setOpenItem(openItem === index ? null : index)}
                >
                  <span className="text-lg font-medium text-[#3a3a3a]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#3b82f6] transition-transform duration-200 ${
                      openItem === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openItem === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-white">
                        <p className="text-[#3a3a3a]">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
