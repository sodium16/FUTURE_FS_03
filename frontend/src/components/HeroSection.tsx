// src/components/HeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="h-screen flex">
      {/* Left Side: Image */}
      <div className="w-1/2 h-full relative hidden md:block">
        <Image
          src="/images/hero-headphones.png"
          alt="Boat Headphones"
          fill // New prop for filling the parent
          className="object-cover" // Tailwind class for object-fit
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full md:w-1/2 h-full bg-brand-blue text-brand-bg flex flex-col justify-center p-8 md:p-16">
        <div className="max-w-md">
          <p className="font-semibold tracking-wider mb-2 opacity-80">Optimal Waves</p>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Amplify Your Vibe
          </h1>
          <p className="text-lg mb-8 opacity-90">
            From your daily commute to intense workouts, discover premium audio gear crafted to deliver unparalleled sound quality for every moment.
          </p>
          <Link href="/shop">
            <button className="px-8 py-3 bg-white text-brand-blue font-bold rounded-lg hover:bg-opacity-90 transition-transform hover:scale-105">
              Shop Boat Audio
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;