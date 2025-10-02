// src/components/Navbar.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // <-- 1. Import the hook
import { IoMenu, IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // <-- 2. Get the current URL path

  // 3. Check if we are on the homepage
  const isHomepage = pathname === '/';

  const navLinks = [
    { name: 'Headphones', href: '/headphones' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'Smart Watches', href: '/smartwatches' },
    { name: 'Contact', href: '/contact' },
  ];

  // 4. Define classes based on the page
  const headerClasses = isHomepage
    ? 'absolute bg-transparent text-brand-bg' // Styles for Homepage
    : 'relative bg-nav-bg text-brand-dark shadow-md'; // Styles for Other Pages

  const linkClasses = isHomepage
    ? 'text-brand-bg' // Text color for Homepage
    : 'text-brand-dark'; // Text color for Other Pages

  return (
    <>
      <header className={`top-0 left-0 w-full z-20 p-4 md:p-6 transition-colors duration-300 ${headerClasses}`}>
        <nav className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <Image
              src="images/boat-logo.svg"
              alt="Boat Audio Logo"
              width={120}
              height={40}
            />
          </Link>

          <ul className={`hidden md:flex items-center space-x-8 ${linkClasses}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="font-medium hover:text-brand-red transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={linkClasses}>
              {isMenuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Panel (no changes needed here) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-brand-dark z-10 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-brand-bg text-2xl font-semibold hover:text-brand-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;