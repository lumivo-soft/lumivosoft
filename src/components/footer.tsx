"use client";

import Link from "next/link";
import Logo from "./ui/logo";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="container mx-auto py-5 px-5 xl:px-0">
      <motion.div
        className="bg-[#003518] p-5 rounded-xl overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          className="bg-[#f1f1f1] p-5 rounded-xl py-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <h1 className="text-2xl md:text-5xl max-w-[600px] text-center mx-auto">
            Ready To Build Your Next Software Solution?
          </h1>
          <p className="text-gray-700 mt-6 text-sm md:text-base max-w-[600px] mx-auto text-center">
            Partner with us to turn your ideas into powerful, scalable software.
            Let&apos;s create technology that accelerates your business growth
            and success.
          </p>
          <motion.a
            href="mailto:lumivosoft@gmail.com"
            className="text-base bg-[#013315] w-fit font-normal rounded-lg px-4 py-2 text-[white] cursor-pointer flex items-center gap-2 mx-auto mt-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>{" "}
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div
          className="py-20  md:px-10 flex justify-between items-start border-b border-[#1f5035] gap-10 flex-col lg:flex-row"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div className="">
            <Logo white={true} />
            <p className="text-[#d6e5d6c7] mt-4 max-w-[450px] text-sm">
              Specializing in custom software development, we blend creativity
              and technical expertise to deliver robust, scalable solutions that
              empower your business and drive digital transformation.
            </p>
          </div>
          <div className="flex justify-between lg:justify-end w-full items-start gap-10 xl:gap-20">
            <div className="flex flex-col gap-5">
              <h1 className="text-[#f1f1ef] uppercase text-lg">MENU</h1>
              <Link href="#" className="text-[#d6e5d6c7] text-sm">
                Home
              </Link>
              <Link href="#" className="text-[#d6e5d6c7] text-sm">
                Service
              </Link>
              <Link href="#" className="text-[#d6e5d6c7] text-sm">
                Our Work
              </Link>
              <Link href="#" className="text-[#d6e5d6c7] text-sm">
                Project
              </Link>
              <Link href="#" className="text-[#d6e5d6c7] text-sm">
                About Us
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-[#f1f1ef] uppercase text-lg">services</h1>
              <p className="text-[#d6e5d6c7] text-sm">Web & App Development</p>
              <p className="text-[#d6e5d6c7] text-sm">UI/UX Design</p>
              <p className="text-[#d6e5d6c7] text-sm">Cloud Solutions</p>
              <p className="text-[#d6e5d6c7] text-sm">QA & Testing</p>
              <p className="text-[#d6e5d6c7] text-sm">IT Consulting</p>
              <p className="text-[#d6e5d6c7] text-sm">Support & Maintenance</p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-[#f1f1ef] uppercase text-lg">Social media</h1>
              <a href="#" target="_blank" className="text-[#d6e5d6c7] text-sm">
                Facebook
              </a>
              <a href="#" target="_blank" className="text-[#d6e5d6c7] text-sm">
                Linkedin
              </a>
              <a href="#" target="_blank" className="text-[#d6e5d6c7] text-sm">
                Twitter
              </a>
              <a href="#" target="_blank" className="text-[#d6e5d6c7] text-sm">
                Instagram
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="pt-5 flex flex-col md:flex-row md:justify-between md:items-center md:px-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <p className="text-[#d6e5d6c7] text-sm text-start">
            &copy; {new Date().getFullYear()} LumivoSoft. All rights reserved.
          </p>
          <div className="">
            <Link href="#" className="text-[#d6e5d6c7] text-sm">
              Privacy Policy
            </Link>
            <span className="text-[#d6e5d6c7] text-sm mx-2">|</span>
            <Link href="#" className="text-[#d6e5d6c7] text-sm">
              Terms & Conditions
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
