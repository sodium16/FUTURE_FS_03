// src/app/terms-of-service/page.tsx
import CtaSection from '@/components/CtaSection';
import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className="bg-white text-brand-dark">
      <main className="container mx-auto px-4 py-24 md:py-32">
        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-12">
          Terms of service
        </h1>

        {/* Content Body */}
        <div className="prose prose-lg max-w-none text-gray-600">
          <p>
            Welcome to Boat Audio, your go-to destination for premium boat audio gear in India. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully, as they contain important information about your legal rights, duties, and obligations.
          </p>
          <h3>Use of the Site</h3>
          <p>
            By accessing our website, you confirm that you are at least 18 years old or visiting with consent from a parent or guardian. You agree to use this site only for browsing products or gathering information related to boat audio systems. Unauthorized use of this website may give rise to a claim for damages or be considered a criminal offense.
          </p>
          <h3>Intellectual Property Rights</h3>
          <p>
            All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Boat Audio or its content suppliers and is protected by Indian and international copyright laws. You agree not to copy, distribute, or duplicate any materials available on our site without express written permission from us.
          </p>
          <h3>Limitation of Liability</h3>
          <p>
            Boat Audio shall not be liable for any indirect, incidental, special, consequential, or exemplary damages arising from the use of this website or products purchased through it. Our liability is limited to the maximum extent permitted by law.
          </p>
          <h3>Changes to Terms</h3>
          <p>
            We reserve the right to revise these Terms of Service at any time without notice by updating this posting. It is your responsibility to review these terms regularly as they are binding upon you during each visit. Thank you for choosing Boat Audio for your marine sound solutions. We appreciate your business and look forward to enhancing your boating experience with top-quality audio equipment.
          </p>
        </div>
      </main>

      {/* Reusable CTA Section */}
      <CtaSection />
    </div>
  );
};

export default TermsOfServicePage;