"use client";
import Link from "next/link";
import Logo from "./ui/logo";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
  };

  const menuVariants = {
    initial: {
      opacity: 0,
      x: "100%",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.35,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="container mx-auto py-6">
      {/* Desktop Nav */}
      <div className="hidden lg:flex justify-between items-center gap-10">
        <div className="flex justify-start items-center gap-10 relative">
          <Logo />
          <span className="h-8 w-[2px] bg-neutral-300 hidden lg:block"></span>
          <ul className="flex gap-10 font-medium text-base ">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#our-work">Our Work</Link>
            </li>
            <li>
              <Link href="#project">Project</Link>
            </li>
            <li>
              <Link href="#service">Service</Link>
            </li>
            <li>
              <Link href="#about-us">About Us</Link>
            </li>
          </ul>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border text-base bg-[#f1f1ef] font-normal border-gray-400 rounded-lg cursor-pointer mr-2">
          Let&apos;s Talk{" "}
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
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      <div className="flex lg:hidden justify-between items-center">
        <Logo />
        <button
          className="p-2 rounded focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(true)}
        >
          {/* Hamburger icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center gap-8 lg:hidden"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={menuVariants}
          >
            <div className=" absolute top-0 right-0 p-4">
              <button
                className="p-2 rounded focus:outline-none"
                aria-label="Close menu"
                onClick={handleCloseMenu}
              >
                {/* Close icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col gap-8 font-medium text-xl mt-8">
              <li>
                <Link href="#" onClick={handleCloseMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#our-work" onClick={handleCloseMenu}>
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="#project" onClick={handleCloseMenu}>
                  Project
                </Link>
              </li>
              <li>
                <Link href="#service" onClick={handleCloseMenu}>
                  Service
                </Link>
              </li>
              <li>
                <Link href="#about-us" onClick={handleCloseMenu}>
                  About Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
