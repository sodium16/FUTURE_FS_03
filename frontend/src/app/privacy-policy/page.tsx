// src/app/privacy-policy/page.tsx
import React from 'react';
import Link from 'next/link';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-white text-brand-dark">
      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-24 md:py-32">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-12">
          Privacy policy
        </h1>

        <div className="prose prose-lg max-w-none text-gray-600">
          <p>
            At Boat Audio, safeguarding your privacy is of paramount importance to us. We are dedicated to securing any personal information shared with us and to maintaining transparency in our data handling practices. This Privacy Policy outlines what information we collect, use, disclose, and protect when you visit and interact with our website.
          </p>
          <h3>Information We Collect</h3>
          <p>
            When you purchase products or register on our site, we may collect certain personal details such as your name, address, email address, phone number, and payment information. Additionally, we gather information about your device and browser to help us optimize our offerings and provide you with a seamless shopping experience.
          </p>
          <h3>How We Use Your Information</h3>
          <p>
            The information collected is primarily used to process your orders efficiently and ensure prompt delivery. We also utilize this data to personalize your experience on our site and improve our products and customer services. Furthermore, understanding customer preferences enables us to personalize your experience on our site and improve our offerings.
          </p>
          <h3>Data Security</h3>
          <p>
            We employ robust security measures and technologies to protect your personal information from unauthorized access or misuse. Our website employs encryption techniques and follows best practices for data security to safeguard your details.
          </p>
          <h3>Your Rights</h3>
          <p>
            You have the right to access, correct, or request the deletion of your personal information at any time. If you wish to exercise these rights or have queries concerning this Privacy Policy or our data practices, please contact our customer support. We encourage you to periodically review this page for the latest information on our privacy practices.
          </p>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-5xl font-extrabold text-brand-dark mb-4">
              Enhance Your Boating Experience
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Explore our latest range of cutting-edge audio gear, designed to deliver exceptional sound quality for your time on the water. Perfect for modern seafarers.
            </p>
            <Link href="/shop">
              <button className="px-8 py-3 bg-brand-blue text-white font-bold rounded-lg hover:bg-opacity-90 transition-transform hover:scale-105">
                Shop Now
              </button>
            </Link>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;