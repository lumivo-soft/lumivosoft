"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="container mx-auto py-20 px-5 lg:px-10 ">
      <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-16 lg:gap-24 xl:gap-0">
        <motion.div
          className="xl:w-full min-w-fit"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-normal">
            About us
          </h1>
        </motion.div>
        <div className="w-full text-base lg:text-lg ">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="font-medium "
          >
            At LUMIVOSOFT, we are dedicated to delivering innovative,
            high-quality software solutions that empower our clients to achieve
            their goals. Our team combines deep technical expertise with a
            passion for creativity, ensuring every project is tailored to your
            unique needs and vision.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="font-normal text-neutral-500 mt-5"
          >
            By prioritizing user experience and leveraging the latest
            technologies, we create digital products that are not only robust
            and scalable, but also intuitive and impactful. Partner with us to
            transform your ideas into powerful, results-driven solutions.
          </motion.div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex w-full items-end gap-10 md:gap-14 xl:gap-24 2xl:gap-32 justify-between h-96 mt-16 border-b-3 border-neutral-300">
          <div className="w-full h-full flex items-end  flex-col justify-end">
            <h1 className="font-normal text-center md:text-start w-full mb-2 flex justify-start items-center flex-col md:flex-row">
              <span className=" text-xl lg:text-4xl">98%</span>
              <span className="text-neutral-500 text-sm lg:text-2xl flex items-center">
                {" "}
                <span className="hidden md:block">/</span> <span>100%</span>
              </span>
            </h1>
            <motion.div
              className="w-full bg-[#e0e0d4] border-t-3 border-t-[#013818]"
              initial={{ height: 0 }}
              whileInView={{ height: "98%" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              style={{ minHeight: 0 }}
            />
          </div>
          <div className="w-full h-full flex items-end  flex-col justify-end">
            <h1 className="font-normal text-center md:text-start w-full mb-2 flex justify-start items-center flex-col md:flex-row">
              <span className=" text-xl lg:text-4xl">95%</span>
              <span className="text-neutral-500 text-sm lg:text-2xl flex items-center">
                {" "}
                <span className="hidden md:block">/</span> <span>100%</span>
              </span>
            </h1>
            <motion.div
              className="w-full bg-[#e0e0d4] border-t-3 border-t-[#013818]"
              initial={{ height: 0 }}
              whileInView={{ height: "95%" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              style={{ minHeight: 0 }}
            />
          </div>
          <div className="w-full h-full flex items-end  flex-col justify-end">
            <h1 className="font-normal text-center md:text-start w-full mb-2 flex justify-start items-center flex-col md:flex-row">
              <span className=" text-xl lg:text-4xl">92%</span>
              <span className="text-neutral-500 text-sm lg:text-2xl flex items-center">
                {" "}
                <span className="hidden md:block">/</span> <span>100%</span>
              </span>
            </h1>
            <motion.div
              className="w-full bg-[#e0e0d4] border-t-3 border-t-[#013818]"
              initial={{ height: 0 }}
              whileInView={{ height: "92%" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              style={{ minHeight: 0 }}
            />
          </div>
          <div className="w-full h-full flex items-end flex-col justify-end">
            <h1 className="font-normal text-center md:text-start w-full mb-2 flex justify-start items-center flex-col md:flex-row">
              <span className=" text-xl lg:text-4xl">87%</span>
              <span className="text-neutral-500 text-sm lg:text-2xl flex items-center">
                {" "}
                <span className="hidden md:block">/</span> <span>100%</span>
              </span>
            </h1>
            <motion.div
              className="w-full bg-[#e0e0d4] border-t-3 border-t-[#013818]"
              initial={{ height: 0 }}
              whileInView={{ height: "87%" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              style={{ minHeight: 0 }}
            />
          </div>
          <div className="w-full h-full flex items-end flex-col justify-end">
            <h1 className="font-normal text-center md:text-start w-full mb-2 flex justify-start items-center flex-col md:flex-row">
              <span className=" text-xl lg:text-4xl">93%</span>
              <span className="text-neutral-500 text-sm lg:text-2xl flex items-center">
                {" "}
                <span className="hidden md:block">/</span> <span>100%</span>
              </span>
            </h1>
            <motion.div
              className="w-full bg-[#e0e0d4] border-t-3 border-t-[#013818]"
              initial={{ height: 0 }}
              whileInView={{ height: "93%" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              style={{ minHeight: 0 }}
            />
          </div>
        </div>
        <div className="flex w-full items-start md:items-end  gap-5 md:gap-14 xl:gap-24 2xl:gap-32 justify-between text-center mt-2 text-xs md:text-sm lg:text-base font-normal text-neutral-500">
          <div className="w-full -rotate-45 md:-rotate-0 ">
            Project Success Rate
          </div>
          <div className="w-full -rotate-45 md:-rotate-0 ">
            Client Satisfaction
          </div>
          <div className="w-full -rotate-45 md:-rotate-0 ">
            On-Time Delivery
          </div>
          <div className="w-full -rotate-45 md:-rotate-0 ">Repeat Clients</div>
          <div className="w-full -rotate-45 md:-rotate-0 ">
            Support Satisfaction
          </div>
        </div>
      </div>
    </section>
  );
}
