// src/lib/data.ts

// Type definitions for our Product data
export interface ProductImage {
  url: string;
}
export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: ProductImage | null;
}

// Reusable function to fetch all products from your API
export async function getProducts(): Promise<Product[]> {
  // We add populate=* to ensure all relations (like images) are included
  const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate=*`;
  try {
    const res = await fetch(apiUrl, { cache: 'no-store' });
    if (!res.ok) {
      console.error("Failed to fetch products. Status:", res.status);
      return [];
    }
    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}