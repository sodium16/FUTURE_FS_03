// src/app/shop/page.tsx
import Image from 'next/image';
import type { Metadata } from 'next';

// Set the title and description for this page
export const metadata: Metadata = {
  title: 'Shop All Products',
  description: 'Browse the full collection of Boat Lifestyle audio gear.',
};

// --- Type Definitions for our Product data ---
interface ProductImage { url: string; }
interface Product { id: number; name: string; category: string; price: string; image: ProductImage | null; }

// --- Data Fetching Function ---
async function getAllProducts(): Promise<Product[]> {
  // We fetch all products and populate their images
  const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate=*`;
  try {
    const res = await fetch(apiUrl, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch products');
    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

// --- The Page Component ---
export default async function ShopPage() {
  const products = await getAllProducts();

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-24 sm:py-32">
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl mb-12">
          Shop All Products
        </h1>

        {/* Re-used Product Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product: Product) => {
            const hasImage = !!product.image?.url;
            const imageUrl = hasImage 
              ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${product.image.url}` 
              : `https://placehold.co/400x400/EDE6F2/080A0B?text=No+Image`;
            
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