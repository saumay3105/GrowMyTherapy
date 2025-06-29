"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function QuoteSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const quoteVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const authorVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center px-8 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/bg.jpg"
          alt="Peaceful therapeutic background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[0.5px]"></div>
      </div>

      {/* Quote Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        <motion.blockquote
          className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 leading-relaxed mb-8 italic drop-shadow-sm"
          variants={quoteVariants}
        >
          "Healing is not about moving on or getting over it, it's about
          learning to make peace with our pain and finding meaning in our
          struggle."
        </motion.blockquote>

        <motion.cite
          className="text-lg md:text-xl text-gray-700 font-medium drop-shadow-sm"
          variants={authorVariants}
        >
          — Dr. Serena Blake
        </motion.cite>
      </div>

      {/* Subtle animation elements */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center drop-shadow-sm">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </motion.section>
  );
}