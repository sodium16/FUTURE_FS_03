// src/components/ProductGallery.tsx
import Image from 'next/image';

// In a real app, this data would come from a database or CMS.
const products = [
  { id: 1, src: '/images/product-1.jpg', alt: 'Man wearing Boat headphones' },
  { id: 2, src: '/images/product-2.jpg', alt: 'Boat audio gear on a wooden surface' },
  { id: 3, src: '/images/product-3.jpg', alt: 'Red Boat headphones' },
  { id: 4, src: '/images/product-4.jpg', alt: 'Collection of Boat earbuds and smartwatches' },
  { id: 5, src: '/images/product-5.jpg', alt: 'Black Boat earbuds in case' },
  { id: 6, src: '/images/product-6.jpg', alt: 'Silver and pink Boat headphones' },
];

const ProductGallery = () => {
  return (
    <section className="bg-brand-bg py-20"> {/* Using your light background color */}
      <div className="container mx-auto px-4">
        {/* You can add a title here if you'd like */}
        {/* <h2 className="text-4xl font-bold text-brand-dark text-center mb-12">Our Products</h2> */}

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="relative aspect-square overflow-hidden rounded-lg shadow-lg group">
              <Image
                src={product.src}
                alt={product.alt}
                fill // New prop
                className="object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out" // Added object-cover class
              />
               {/* Optional: Add an overlay on hover */}
              <div className="absolute inset-0 bg-brand-dark opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;