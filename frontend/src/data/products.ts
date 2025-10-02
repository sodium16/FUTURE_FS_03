// src/data/products.ts
export interface Product {
  id: number;
  name: string;
  category: 'headphones' | 'speakers' | 'smartwatches';
  price: string;
  imageSrc: string;
}

export const products: Product[] = [
  { id: 1, name: 'Boat Rockerz 450', category: 'headphones', price: '₹1,499', imageSrc: '/images/product-1.jpg' },
  { id: 2, name: 'Boat Airdopes 131', category: 'headphones', price: '₹1,099', imageSrc: '/images/product-4.jpg' },
  { id: 3, name: 'Boat Stone 650', category: 'speakers', price: '₹1,999', imageSrc: '/images/product-generic-speaker.jpg' },
  { id: 4, name: 'Boat Rugby Plus', category: 'speakers', price: '₹2,499', imageSrc: '/images/product-generic-speaker-2.jpg' },
  { id: 5, name: 'Boat Watch Storm', category: 'smartwatches', price: '₹2,999', imageSrc: '/images/product-generic-watch.jpg' },
  { id: 6, name: 'Boat Watch Flash', category: 'smartwatches', price: '₹2,499', imageSrc: '/images/product-generic-watch-2.jpg' },
  { id: 7, name: 'Boat Rockerz 550', category: 'headphones', price: '₹1,999', imageSrc: '/images/product-3.jpg' },
];