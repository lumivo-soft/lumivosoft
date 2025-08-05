"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import NavBar from "../../components/nav-bar";

export default function HeroSection() {
  return (
    <section className="relative pb-20 border-b border-gray-200 px-5 xl:px-0">
      <NavBar />

      <div className="lg:space-y-7 space-y-5 lg:py-28  py-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-center flex justify-center items-center gap-6 lg:gap-12 text-[#B2B3B0] uppercase tracking-widest"
        >
          <span className=" h-0.5 lg:h-1 w-10 lg:w-16 bg-[#B2B3B0]"></span>
          <h1>LumivoSoft</h1>
          <span className="h-0.5 lg:h-1 w-10 lg:w-16 bg-[#B2B3B0]"></span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="text-center uppercase text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal"
        >
          software company agency
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="text-center text-sm lg:text-lg text-gray-500"
        >
          Empowering businesses with innovative, user-centric software
          solutions.
          <br className="hidden md:block" />
          We craft scalable applications and digital products using cutting-edge
          technology for maximum impact and success.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          className="flex justify-center items-center gap-4"
        >
          <button className="text-base bg-[#013315] font-normal  rounded-lg px-4 py-2 text-[white] cursor-pointer flex items-center gap-2">
            Get in Touch{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 rotate-45"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
          </button>
          <button className="text-base bg-[#f1f1ef] font-normal  rounded-lg px-4 py-2 border border-gray-700 cursor-pointer flex items-center gap-2">
            Learn More{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 rotate-135"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        className="w-full rounded-xl overflow-hidden h-[400px]  xl:h-[600px] container mx-auto relative "
      >
        <Image
          src="/image/hero.jpg"
          alt="hero-img"
          fill={false}
          width={1920}
          height={600}
          className="w-full h-full object-cover"
          priority
        />
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
          }}
        />

        <div className="absolute top-5 left-5 z-20 flex justify-start items-center gap-4">
          <div className="  w-16 h-16 lg:w-20 lg:h-20 flex justify-center items-center rounded-full border-2 border-[#B2B3B0]">
            <Image
              src="/logo-white.png"
              alt="hero-img"
              fill={false}
              width={100}
              height={100}
              className="w-8 lg:w-10 h-8 lg:h-10"
              priority
            />
          </div>
          <div className="">
            <h1 className="text-xl lg:text-3xl font-normal text-[#B2B3B0] uppercase">
              BOOST
            </h1>
            <h1 className="text-2xl lg:text-4xl font-normal text-[#f1f1ef] uppercase">
              Your brand
            </h1>
          </div>
        </div>
      </motion.div>

      <div
        className="absolute w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[600px] 2xl:w-[800px] 2xl:h-[800px]  top-0 left-0 -z-10 select-none"
        style={{
          backgroundImage: `linear-gradient(
            135deg,
            hsl(38deg 56% 80%) 0%,
            hsl(38deg 56% 80%) 0%,
            hsl(38deg 56% 80%) 3%,
            hsl(38deg 56% 80%) 7%,
            hsl(38deg 56% 80%) 13%,
            hsl(37deg 54% 83%) 20%,
            hsl(37deg 49% 86%) 28%,
            hsl(38deg 40% 89%) 36%,
            hsl(41deg 23% 93%) 44%,
            hsl(60deg 7% 94%) 52%,
            hsl(60deg 7% 94%) 60%,
            hsl(60deg 7% 94%) 67%,
            hsl(60deg 7% 94%) 74%,
            hsl(60deg 7% 94%) 81%,
            hsl(60deg 7% 94%) 86%,
            hsl(60deg 7% 94%) 92%,
            hsl(60deg 7% 94%) 96%,
            hsl(60deg 7% 94%) 100%
          )`,
        }}
      ></div>
      <div
        className="absolute w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[600px] 2xl:w-[800px] 2xl:h-[800px] top-0 right-0 -z-10 select-none"
        style={{
          backgroundImage: `linear-gradient(
            225deg,
            hsl(38deg 56% 80%) 0%,
            hsl(38deg 56% 80%) 0%,
            hsl(38deg 56% 80%) 3%,
            hsl(38deg 56% 80%) 7%,
            hsl(38deg 56% 80%) 13%,
            hsl(37deg 54% 83%) 20%,
            hsl(37deg 49% 86%) 28%,
            hsl(38deg 40% 89%) 36%,
            hsl(41deg 23% 93%) 44%,
            hsl(60deg 7% 94%) 52%,
            hsl(60deg 7% 94%) 60%,
            hsl(60deg 7% 94%) 67%,
            hsl(60deg 7% 94%) 74%,
            hsl(60deg 7% 94%) 81%,
            hsl(60deg 7% 94%) 86%,
            hsl(60deg 7% 94%) 92%,
            hsl(60deg 7% 94%) 96%,
            hsl(60deg 7% 94%) 100%
          )`,
        }}
      ></div>
    </section>
  );
}
