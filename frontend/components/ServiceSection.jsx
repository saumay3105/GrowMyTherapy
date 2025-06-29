"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Anxiety & Stress Management",
    description:
      "Develop personalized strategies to manage anxiety and stress, improve emotional regulation, and build resilience in daily life.",
    image: "/anxiety-management.jpg",
  },
  {
    title: "Relationship Counseling",
    description:
      "Strengthen communication, resolve conflicts, and deepen emotional connections in personal and professional relationships.",
    image: "/relationship-counseling.jpg",
  },
  {
    title: "Trauma Recovery",
    description:
      "Evidence-based approaches to process traumatic experiences, restore sense of safety, and promote post-traumatic growth.",
    image: "/trauma-recovery.jpg",
  },
];

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const feesVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <div>
      <motion.section
        className="py-20 px-4 bg-[#F3F0E8]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-light text-center mb-20 text-gray-800 font-serif"
            variants={itemVariants}
          >
            Services & Specialties
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-16"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={cardVariants}
              >
                <motion.div
                  className="relative w-80 h-80 mx-auto mb-8 rounded-full overflow-hidden shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  className="max-w-sm mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-light mb-4 text-gray-800 font-serif">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 bg-white px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-200"
            variants={feesVariants}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Session Fees
              </h3>

              <motion.div className="space-y-4" variants={containerVariants}>
                <motion.div
                  className="flex justify-between items-center py-4 border-b border-gray-100 last:border-b-0"
                  variants={itemVariants}
                >
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Individual Session
                    </h4>
                    <p className="text-gray-600 text-sm">50-minute session</p>
                  </div>
                  <div className="text-xl font-bold text-gray-800">$200</div>
                </motion.div>

                <motion.div
                  className="flex justify-between items-center py-4 border-b border-gray-100 last:border-b-0"
                  variants={itemVariants}
                >
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Couples Session
                    </h4>
                    <p className="text-gray-600 text-sm">60-minute session</p>
                  </div>
                  <div className="text-xl font-bold text-gray-800">$240</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
