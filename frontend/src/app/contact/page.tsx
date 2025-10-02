// src/app/contact/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { // <-- Add this object
  title: 'Contact Us | Boat Rebrand',
  description: 'Reach out to Boat Audio for inquiries about products and services.',
};

const ContactPage = () => {
  return (
    <div className="bg-white text-brand-dark">
      {/* Top Section with Map Background */}
      <section className="relative bg-gray-100 py-24 md:py-32">
        {/* You can replace this with an actual map screenshot */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30" 
          style={{ backgroundImage: "url('/images/map-background.png')" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Contact</h1>
            <Link href="#contact-form">
              <button className="px-8 py-3 border-2 border-brand-dark font-bold rounded-lg hover:bg-brand-dark hover:text-white transition-colors">
                Get in touch
              </button>
            </Link>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl hidden md:block mr-8">
              <h3 className="font-bold text-lg">Location</h3>
              <p className="text-gray-600">India</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          {/* Form */}
          <form className="w-full">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-first-name">
                  Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-email">
                  Email
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-message">
                  Message
                </label>
                <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" rows={4}></textarea>
              </div>
            </div>
            <button className="px-8 py-3 bg-white text-brand-blue font-bold rounded-lg hover:bg-opacity-90 transition-colors" type="submit">
              Submit
            </button>
          </form>

          {/* Text */}
          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-4">Reach Out for Assistance</h2>
            <p className="opacity-90">
              Contact us for inquiries about Boat Audios products and services in India.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
       <section className="bg-white py-20 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-5xl font-extrabold text-brand-dark mb-4">
              Unlock Your Ultimate Sound
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Explore top-tier audio solutions designed for lasting enthusiasts. Discover premium sound quality. Perfect for elevating your daily adventures.
            </p>
            <Link href="/shop">
              <button className="px-8 py-3 border-2 border-brand-dark text-brand-dark font-bold rounded-lg hover:bg-brand-dark hover:text-white transition-colors">
                Shop Now
              </button>
            </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;