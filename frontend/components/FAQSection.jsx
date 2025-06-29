"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available? ",
    answer: "Yes—all virtual sessions via Zoom",
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice required.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const answerVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="py-20 px-8"
      style={{ backgroundColor: "#F3F0E8" }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl lg:text-5xl font-light text-gray-800 mb-16 text-left"
          variants={titleVariants}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div className="space-y-0">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-400"
              variants={itemVariants}
            >
              <motion.button
                className="w-full flex justify-between items-center py-6 px-3 text-left hover:bg-[#DAD5C9] hover:bg-opacity-5 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.998 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-lg lg:text-xl font-medium text-gray-800 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-gray-600 flex-shrink-0" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    variants={answerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="pr-10 pb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
