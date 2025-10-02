// src/components/PartnerLogos.tsx
import React from 'react';
import Image from 'next/image';

// Define the shape of the logo data
interface Logo {
  id: number;
  url: string;
  name: string;
}

// The component now accepts 'logos' as a prop
const PartnerLogos = ({ logos }: { logos: Logo[] }) => {
  console.log("--- PARTNER LOGOS DATA RECEIVED ---", logos);
  return (
    <section className="py-20 bg-brand-bg">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-3">
              Seamless Symphony
            </p>
            <h3 className="text-4xl font-bold text-brand-dark mb-4">
              Experience Unmatched Sound Onboard
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Trusted by leading boat enthusiasts across India, our journey is marked by our revolutionary engineering and extraordinary, enduring quality.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {/* We now map over the logos prop */}
            {logos?.map((logo) => (
              <div key={logo.id} className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md">
                <div className="relative h-12 w-32">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${logo.url}`}
                    alt={logo.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;