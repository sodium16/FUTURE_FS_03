// src/app/page.tsx
import HeroSection from '@/components/HeroSection';
import ElevateExperience from '@/components/ElevateExperience';
import ProductGallery from '@/components/ProductGallery';
import FeatureSection from '@/components/FeatureSection';
import PartnerLogos from '@/components/PartnerLogos';
import Testimonial from '@/components/Testimonial';
import CtaSection from '@/components/CtaSection';

async function getHomepageData() {
  try {
    // This is the correct API call to get all the data for the homepage
    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/homepage?populate[features][populate]=*&populate=partner_logos`;
    const res = await fetch(apiUrl, { cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.data) return null;
    return data.data;
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    return null;
  }
}

export default async function Home() {
  const homepageData = await getHomepageData();

  if (!homepageData) {
    return (
      <div className="text-center py-40">
        <h1 className="text-2xl font-bold">Homepage content could not be loaded.</h1>
        <p>Please ensure your local backend server is running and the Homepage content is published.</p>
      </div>
    );
  }

  // Destructure all the data we need from the API response
  const { elevate_title, elevate_description, testimonial_quote, testimonial_author, features, partner_logos } = homepageData;

  return (
    <>
      {/* All components are now included in the correct order */}
      <HeroSection />
      <ElevateExperience title={elevate_title} description={elevate_description} />
      <ProductGallery /> {/* Note: This is still using static data for now */}
      <FeatureSection features={features} />
      <PartnerLogos logos={partner_logos} />
      <Testimonial quote={testimonial_quote} author={testimonial_author} />
      <CtaSection />
    </>
  );
}