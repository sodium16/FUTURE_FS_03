// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-bg py-12">
      <div className="container mx-auto px-4 text-center">
        <Image
          src="images/boat-logo.svg" // Assumes your logo is light-colored for dark bg
          alt="Boat Audio Logo"
          width={150}
          height={50}
          className="mx-auto mb-6"
        />
        <ul className="flex justify-center space-x-6 mb-6">
          <li><Link href="/headphones" className="hover:text-brand-red">Headphones</Link></li>
          <li><Link href="/speakers" className="hover:text-brand-red">Speakers</Link></li>
          <li><Link href="/smartwatches" className="hover:text-brand-red">Smart Watches</Link></li>
          <li><Link href="/terms-of-service" className="hover:text-brand-red">Terms of service</Link></li>
          <li><Link href="/privacy-policy" className="hover:text-brand-red">Privacy policy</Link></li>
        </ul>
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Boat Audio Rebrand. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;