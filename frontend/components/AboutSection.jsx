"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="py-20 px-8 max-w-7xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="flex flex-col lg:flex-row items-start gap-16">
        {/* Text Content - Left Side */}
        <div className="lg:w-1/2 space-y-6">
          <motion.h1
            className="text-4xl lg:text-5xl font-light text-gray-600 mb-8"
            variants={itemVariants}
          >
            About Dr. Serena Blake
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            variants={itemVariants}
          >
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in
            Los Angeles, CA, with eight years of experience and over 500 client
            sessions. She blends evidence-based approaches—like
            cognitive-behavioral therapy and mindfulness—with compassionate,
            personalized care to help you overcome anxiety, strengthen
            relationships, and heal from trauma. Whether you meet in her
            Maplewood Drive office or connect virtually via Zoom, Dr. Blake is
            committed to creating a safe, supportive space for you to thrive.
          </motion.p>

          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            variants={itemVariants}
          >
            Dr. Blake works with adults and young adults navigating a range of
            emotional and psychological challenges, including stress,
            self-esteem issues, life transitions, and unresolved childhood
            wounds. With over eight years of practice and 500+ client sessions,
            she brings a depth of experience to each therapeutic relationship.
            She takes time to understand each client's unique story, tailoring
            her approach to align with your goals, strengths, and values. Her
            therapeutic style is warm and collaborative—grounded in trust,
            curiosity, and a deep respect for your lived experience. Clients
            often describe her as insightful, calm, and genuinely invested in
            their growth.
          </motion.p>
        </div>

        {/* Image - Right Side */}
        <motion.div
          className="lg:w-1/2 flex justify-center lg:justify-end"
          variants={imageVariants}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-80 h-96 lg:w-96 lg:h-[500px] relative overflow-hidden rounded-2xl bg-gray-100">
              {/* Placeholder for the actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                <div className="w-64 h-80 bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <span className="text-gray-400 text-sm">
                    Dr. Serena Blake
                  </span>
                </div>
              </div>
              {/* Uncomment and replace with actual image path when available */}
              <Image
                src="/pp.webp"
                alt="Dr. Jennifer Hahm"
                fill
                className="object-cover"
              />
              
              {/* Professional Details Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 rounded-b-2xl">
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-1">Dr. Serena Blake</h3>
                  <p className="text-gray-200 text-sm mb-2">PsyD (Clinical Psychologist)</p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-medium">Top Rated</span>
                    </div>
                    <span className="text-gray-300">|</span>
                    <span className="text-sm">8 Years Experience • 500+ Sessions</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}