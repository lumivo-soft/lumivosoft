"use client";

import { motion } from "framer-motion";

export default function OurService() {
  return (
    <section className="container mx-auto my-20 px-5 xl:px-0">
      <div className="w-full bg-[#013818] py-20 px-5 md:px-10 rounded-2xl overflow-hidden">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
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
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-normal text-[#f1f1ef] mb-2">
              Our Service
            </h1>
            <p className="text-[#d6e5d6c7] text-lg max-w-2xl mt-6">
              Our software agency delivers robust digital solutions to
              accelerate your business growth, streamline operations, and
              enhance user experience.
            </p>
          </motion.div>
          <motion.button
            className="border min-w-fit border-[#d6e5d6] text-[#f1f1ef] px-6 py-3 rounded-lg font-medium hover:bg-[#014d2a] transition-all flex items-center gap-2 self-start md:self-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            Schedule Discussion
            <span className="inline-block">→</span>
          </motion.button>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
          {/* Card 1 */}
          <motion.div
            className="bg-[#02461F] rounded-xl p-8 flex flex-col gap-4 shadow-md"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <div className="bg-[#e0e0d4] w-10 h-10 flex items-center justify-center rounded-lg mb-2">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#013818"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-[#f1f1ef]">
              Web & App Development
            </h2>
            <p className="text-[#d6e5d6c7]">
              Custom websites, web apps, and mobile solutions built for
              performance, scalability, and seamless user experience.
            </p>
            <button className="mt-auto border border-[#d6e5d6] text-[#f1f1ef] px-4 py-2 rounded-lg font-medium hover:bg-[#014d2a] transition-all flex items-center gap-2">
              Schedule Discussion <span>→</span>
            </button>
          </motion.div>
          {/* Card 2 */}
          <motion.div
            className="bg-[#02461F] rounded-xl p-8 flex flex-col gap-4 shadow-md"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="bg-[#e0e0d4] w-10 h-10 flex items-center justify-center rounded-lg mb-2">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#013818"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-[#f1f1ef]">
              UI/UX Design
            </h2>
            <p className="text-[#d6e5d6c7]">
              Intuitive, modern interfaces and user journeys that delight and
              convert, tailored to your brand and audience.
            </p>
            <button className="mt-auto border border-[#d6e5d6] text-[#f1f1ef] px-4 py-2 rounded-lg font-medium hover:bg-[#014d2a] transition-all flex items-center gap-2">
              Schedule Discussion <span>→</span>
            </button>
          </motion.div>
          {/* Card 3 */}
          <motion.div
            className="bg-[#02461F] rounded-xl p-8 flex flex-col gap-4 shadow-md"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <div className="bg-[#e0e0d4] w-10 h-10 flex items-center justify-center rounded-lg mb-2">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#013818"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12h18" />
                <path d="M12 3v18" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-[#f1f1ef]">
              Cloud Solutions
            </h2>
            <p className="text-[#d6e5d6c7]">
              Cloud migration, DevOps, and scalable infrastructure to power your
              digital transformation and business agility.
            </p>
            <button className="mt-auto border border-[#d6e5d6] text-[#f1f1ef] px-4 py-2 rounded-lg font-medium hover:bg-[#014d2a] transition-all flex items-center gap-2">
              Schedule Discussion <span>→</span>
            </button>
          </motion.div>
          {/* Card 4 */}
          <motion.div
            className="bg-[#02461F] rounded-xl p-8 flex flex-col gap-4 shadow-md"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            <div className="bg-[#e0e0d4] w-10 h-10 flex items-center justify-center rounded-lg mb-2">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#013818"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M8 4v16" />
                <path d="M16 4v16" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-[#f1f1ef]">
              QA & Testing
            </h2>
            <p className="text-[#d6e5d6c7]">
              Comprehensive quality assurance, automated and manual testing to
              ensure flawless, bug-free product launches.
            </p>
            <button className="mt-auto border border-[#d6e5d6] text-[#f1f1ef] px-4 py-2 rounded-lg font-medium hover:bg-[#014d2a] transition-all flex items-center gap-2">
              Schedule Discussion <span>→</span>
            </button>
          </motion.div>
          {/* Card 5 */}
          <motion.div
            className="bg-[#02461F] rounded-xl p-8 flex flex-col gap-4 shadow-md"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          >
            <div className="bg-[#e0e0d4] w-10 h-10 flex items-center justify-center rounded-lg mb-2">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#013818"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20v-6" />
                <path d="M6 20v-4" />
                <path d="M18 20v-2" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-[#f1f1ef]">
              IT Consulting
            </h2>
            <p className="text-[#d6e5d6c7]">
              Expert advice and digital strategy to help you make the right
              technology decisions for your business growth.
            </p>
            <button className="mt-auto border border-[#d6e5d6] text-[#f1f1ef] px-4 py-2 rounded-lg font-medium hover:bg-[#014d2a] transition-all flex items-center gap-2">
              Schedule Discussion <span>→</span>
            </button>
          </motion.div>
          {/* Card 6 */}
          <motion.div
            className="bg-[#02461F] rounded-xl p-8 flex flex-col gap-4 shadow-md"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
          >
            <div className="bg-[#e0e0d4] w-10 h-10 flex items-center justify-center rounded-lg mb-2">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#013818"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16v16H4z" />
                <path d="M9 9h6v6H9z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-[#f1f1ef]">
              Support & Maintenance
            </h2>
            <p className="text-[#d6e5d6c7]">
              Ongoing support, updates, and maintenance to keep your digital
              products secure, up-to-date, and running smoothly.
            </p>
            <button className="mt-auto border border-[#d6e5d6] text-[#f1f1ef] px-4 py-2 rounded-lg font-medium hover:bg-[#014d2a] transition-all flex items-center gap-2">
              Schedule Discussion <span>→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
