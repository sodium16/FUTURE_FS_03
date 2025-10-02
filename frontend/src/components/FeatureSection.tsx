// src/components/FeatureSection.tsx
import React from 'react';

// --- CORRECTED TYPE DEFINITION ---
// The image object is simpler, without the 'data' and 'attributes' wrappers.
interface Feature {
  id: number;
  title: string;
  description: string;
  background_image: {
    url: string;
  } | null;
}

const FeatureSection = ({ features }: { features: Feature[] }) => {
    console.log("--- DATA RECEIVED BY FEATURESECTION.TSX ---", JSON.stringify(features, null, 2));

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-3">
          Engineered for Life
        </h2>
        <h3 className="text-4xl font-bold text-brand-dark mb-12">
          Experience the Difference
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features?.map((feature) => {
            // --- CORRECTED LOGIC ---
            // We now look for feature.background_image.url directly.
            const bgImageUrl = feature.background_image?.url
              ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${feature.background_image.url}`
              : 'https://placehold.co/600x400/080A0B/fff?text=Image';

            return (
              <div
                key={feature.id}
                className="relative min-h-[400px] rounded-lg overflow-hidden shadow-xl p-8 flex flex-col justify-end items-start text-left bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImageUrl})` }}
              >
                <div className="absolute inset-0 bg-brand-dark opacity-50"></div>
                <div className="relative z-10 text-white">
                  <h4 className="text-2xl font-bold mb-3">{feature.title}</h4>
                  <p className="opacity-90">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;