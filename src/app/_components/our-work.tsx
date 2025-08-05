"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurWork() {
  return (
    <section className="container mx-auto  px-5 xl:px-0">
      <div className="border border-gray-300 rounded-xl overflow-hidden w-full py-20 px-5 md:px-10 bg-white/70">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 border-b border-gray-300 pb-8"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-normal mb-2">
              Our Work
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mt-6">
              Our portfolio showcases how we help businesses grow and innovate
              with custom software, cloud solutions, and digital transformation.
            </p>
          </motion.div>
          <motion.button
            className="border border-gray-400 min-w-fit text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all flex items-center gap-2 self-start md:self-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            Show More <span className="inline-block">→</span>
          </motion.button>
        </motion.div>

        {/* Case Study 1 */}
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8 md:gap-12 lg:gap-34 mb-12  w-full border-b border-gray-300 pb-8">
          <motion.div
            className="flex-1 flex flex-col justify-between items-start  h-full max-w-[600px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <span className="inline-block border border-gray-300 text-gray-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Custom Development
            </span>
            <div className="">
              <h2 className="text-2xl mb-2">
                FinTechPro&apos;s Platform Modernization
              </h2>
              <p className="text-gray-600 mb-4 text-sm">
                We partnered with FinTechPro to rebuild their legacy platform
                using modern web technologies, resulting in a scalable, secure,
                and user-friendly solution that accelerated their product
                roadmap.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 relative order-first md:order-2 flex items-center justify-center w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <Image
              src="/image/hero.jpg"
              alt="FinTechPro project"
              width={600}
              height={224}
              className="rounded-xl w-full h-full object-cover"
              priority
            />
            <span className="absolute top-3 left-3 lg:-left-16 lg:top-1/2 lg:-translate-y-1/2 bg-white/90 lg:bg-white text-gray-900 px-4 py-2 rounded-lg  font-semibold shadow">
              <span className="text-xl lg:text-2xl">+60%</span> <br />
              <span className="text-[#c8c9c8] font-normal text-sm lg:text-base">
                User Growth
              </span>
            </span>
          </motion.div>
        </div>

        {/* Case Study 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-34 mb-12  w-full border-b border-gray-300 pb-8">
          <motion.div
            className="flex-1 relative  flex items-center justify-center w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <Image
              src="/image/hero.jpg"
              alt="FinTechPro project"
              width={600}
              height={224}
              className="rounded-xl w-full h-full object-cover"
              priority
            />
            <span className="absolute top-3 right-3  lg:-right-14 lg:top-1/2 lg:-translate-y-1/2 bg-white/90 lg:bg-white text-gray-900 px-4 py-2 rounded-lg  font-semibold shadow">
              <span className="text-xl lg:text-2xl">+99.9%</span> <br />
              <span className="text-[#c8c9c8] font-normal text-sm lg:text-base">
                Uptime
              </span>
            </span>
          </motion.div>
          <motion.div
            className="flex-1 flex flex-col justify-between items-start  h-full max-w-[600px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <span className="inline-block border border-gray-300 text-gray-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Cloud Migration
            </span>
            <div className="">
              <h2 className="text-2xl mb-2">RetailX Cloud Transformation</h2>
              <p className="text-gray-600 mb-4 text-sm">
                RetailX trusted us to migrate their infrastructure to the cloud,
                improving reliability, scalability, and cost efficiency while
                enabling rapid deployment of new features.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Case Study 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-34 mb-12  w-full border-b border-gray-300 pb-8">
          <motion.div
            className="flex-1 flex flex-col justify-between items-start  h-full max-w-[600px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <span className="inline-block border border-gray-300 text-gray-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              UI/UX Redesign
            </span>
            <div className="">
              <h2 className="text-2xl mb-2">EduPlus App Redesign</h2>
              <p className="text-gray-600 mb-4 text-sm">
                For EduPlus, we delivered a complete UI/UX overhaul, resulting
                in a more engaging, accessible, and visually appealing learning
                experience for thousands of users.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 relative order-first md:order-2 flex items-center justify-center w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <Image
              src="/image/hero.jpg"
              alt="FinTechPro project"
              width={600}
              height={224}
              className="rounded-xl w-full h-full object-cover"
              priority
            />
            <span className="absolute top-3 left-3 lg:-left-16 lg:top-1/2 lg:-translate-y-1/2 bg-white/90 lg:bg-white text-gray-900 px-4 py-2 rounded-lg  font-semibold shadow">
              <span className="text-xl lg:text-2xl">+40%</span> <br />
              <span className="text-[#c8c9c8] font-normal text-sm lg:text-base">
                Engagement
              </span>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
