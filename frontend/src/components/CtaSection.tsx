// src/components/CtaSection.tsx
import React from 'react';
import Link from 'next/link';

const CtaSection = () => {
  return (
    <section className="relative bg-[url('/images/cta-bg.jpg')] bg-cover bg-center py-20 text-center text-white">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-brand-dark opacity-60"></div>

      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-4">
          Upgrade Your Sound Experience
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
          Discover premium audio gear designed for water enthusiasts. Perfectly engineered to elevate your boating adventures with crisp, immersive sound. Explore our collection today.
        </p>
        <Link href="/shop">
          <button className="px-8 py-3 bg-brand-red text-white font-bold rounded-full hover:bg-opacity-90 transition-transform hover:scale-105">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;