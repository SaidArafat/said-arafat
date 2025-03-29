'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Navbar() {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
  ];

  return (
    <nav
      className={`flex items-start justify-start w-full px-[5vw] bg-black absolute top-0 transition-height duration-500 ${burgerMenuActive ? 'h-screen' : 'h-0'}`}
    >
      <header className="absolute top-0 py-8 w-[calc(100%-10vw)] flex items-center justify-between">
        <Link
          href="/"
          className={`text-3xl font-semibold transition-colors duration-250 hover:text-gray-300 ${!burgerMenuActive ? 'text-black' : 'text-white'}`}
        >
          SAID
        </Link>
        <div
          className={`relative w-14 h-6 cursor-pointer ${!burgerMenuActive && '-mt-3'}`}
          aria-label="Toggle menu"
          onClick={() => setBurgerMenuActive(!burgerMenuActive)}
        >
          <span
            className={`absolute w-10 md:w-14 h-1 transition-transform duration-250 ease-in-out right-1 transform -translate-y-1/2 ${burgerMenuActive ? 'top-1/2 rotate-45 bg-white' : 'bg-black top-1/2'}`}
          ></span>
          <span
            className={`absolute w-10 md:w-14 h-1 transition-transform duration-250 ease-in-out top-1/2 right-1 transform -translate-y-1/2 ${burgerMenuActive ? '-rotate-45 bg-white' : ' bg-black mt-4'}`}
          ></span>
        </div>
      </header>
      <main
        className={`absolute inset-0 px-[5vw] top-[25vh] ${burgerMenuActive ? 'block' : 'hidden'}`}
      >
        <motion.ul
          animate={burgerMenuActive ? 'open' : 'closed'}
          variants={motionVariants}
        >
          {links.map((link) => (
            <motion.li
              key={link.label}
              variants={listItemVariants}
              className="py-4"
            >
              <Link
                className="text-3xl font-medium text-gray-500 transition-colors duration-250 hover:text-gray-300"
                href={link.href}
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </main>
    </nav>
  );
}

const motionVariants = {
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: 'easeOut',
      type: 'spring',
    },
  },
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0,
      duration: 0,
    },
  },
};

const listItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
    },
  },
  closed: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
};
