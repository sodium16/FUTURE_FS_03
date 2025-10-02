// src/app/shop/page.tsx
import Image from 'next/image';
import type { Metadata } from 'next';
import { getProducts, Product } from '@/lib/data'; // <-- Import our reusable function and types

// Set the title and description for this page
export const metadata: Metadata = {
  title: 'Shop All Products',
  description: 'Browse the full collection of Boat Lifestyle audio gear.',
};

// --- The Page Component ---
export default async function ShopPage() {
  const products = await getProducts(); // <-- Use our clean, reusable function

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-24 sm:py-32">
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl mb-12">
          Shop All Products
        </h1>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product: Product) => {
            let imageUrl: string;
            let hasImage: boolean;

            // This explicit if/else block is guaranteed to pass type-checking
            if (product.image?.url) {
              imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${product.image.url}`;
              hasImage = true;
            } else {
              imageUrl = `https://placehold.co/400x400/EDE6F2/080A0B?text=No+Image`;
              hasImage = false;
            }

            return (
              <div key={product.id} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src={imageUrl}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    unoptimized={!hasImage}
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}