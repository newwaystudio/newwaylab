'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component

interface Product {
  title: string;
  shortDescription: string;
  appStoreLink: string;
  googlePlayLink: string;
  iconPath: string;
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        setError('Failed to fetch products');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('An unexpected error occurred.');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (index: number) => {
    const productToDelete = products[index];
    if (window.confirm(`Are you sure you want to delete ${productToDelete.title}?`)) {
      try {
        const response = await fetch(`/api/products`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ index }),
        });

        if (response.ok) {
          setMessage(`Product ${productToDelete.title} deleted successfully!`);
          fetchProducts(); // Refresh the list
        } else {
          const errorData = await response.json();
          setError(errorData.error || 'Failed to delete product');
        }
      } catch (err) {
        console.error('Delete error:', err);
        setError('An unexpected error occurred during deletion.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-black py-12">
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-black">
                NewWay Labs Admin
              </Link>
            </div>
            <nav>
              <Link href="/admin/products/add" className="ml-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                Add New Product
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h1 className="text-4xl font-bold text-black mb-8">Manage Products</h1>
        {message && <p className="text-green-600 mb-4">{message}</p>}
        {error && <p className="text-red-600 mb-4">{error}</p>}

        {products.length === 0 ? (
          <p className="text-gray-600">No products found. Add a new product to get started.</p>
        ) : (
          <div className="space-y-4">
            {products.map((product, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex items-center flex-grow">
                  <div className="flex-shrink-0 mr-4">
                    <Image src={product.iconPath} alt={product.title} width={48} height={48} className="rounded-md" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">{product.title}</h3>
                    <p className="text-gray-600 text-sm">{product.shortDescription.substring(0, 100)}...</p>
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <Link href={`/admin/products/${encodeURIComponent(product.title)}/edit`} className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(index)}
                    className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 