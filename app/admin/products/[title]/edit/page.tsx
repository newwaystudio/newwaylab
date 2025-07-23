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

export default function EditProductPage({ params }: { params: { title: string } }) {
  const router = useRouter();
  const productTitle = decodeURIComponent(params.title);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // New state for selected file
  const [previewUrl, setPreviewUrl] = useState<string | null>(null); // New state for image preview

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('/api/products');
        if (response.ok) {
          const products: Product[] = await response.json();
          const foundProduct = products.find(p => p.title === productTitle);
          if (foundProduct) {
            setProduct(foundProduct);
            setPreviewUrl(foundProduct.iconPath); // Set initial preview URL from existing iconPath
          } else {
            setError('Product not found.');
          }
        } else {
          setError('Failed to fetch products.');
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError('An unexpected error occurred.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productTitle]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // Create a URL for the image preview
    } else {
      setSelectedFile(null);
      setPreviewUrl(product?.iconPath || null); // Revert to existing iconPath if no file selected
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!product) {
      setError('No product data to update.');
      return;
    }

    let newIconPath = product.iconPath;

    if (selectedFile) {
      // Upload the new icon file first
      const formData = new FormData();
      formData.append('icon', selectedFile);

      try {
        const uploadResponse = await fetch('/api/upload-icon', {
          method: 'POST',
          body: formData,
        });

        if (uploadResponse.ok) {
          const uploadData = await uploadResponse.json();
          newIconPath = uploadData.filePath; // Get the new path from the upload API
        } else {
          const errorData = await uploadResponse.json();
          setError(errorData.error || 'Failed to upload icon');
          return; // Stop if icon upload fails
        }
      } catch (err) {
        console.error('Icon upload error:', err);
        setError('An unexpected error occurred during icon upload.');
        return;
      }
    }

    // Proceed to update product with newIconPath
    try {
      const response = await fetch('/api/products', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...product, iconPath: newIconPath }), // Update iconPath
      });

      if (response.ok) {
        setMessage('Product updated successfully!');
        router.push('/admin/products'); // Redirect back to product list
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to update product');
      }
    } catch (err) {
      console.error('Update error:', err);
      setError('An unexpected error occurred.');
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-white text-black flex items-center justify-center">Loading...</div>;
  }

  if (error && !product) {
    return <div className="min-h-screen bg-white text-black flex items-center justify-center text-red-600">Error: {error}</div>;
  }

  if (!product) {
    return <div className="min-h-screen bg-white text-black flex items-center justify-center">Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white text-black py-12">
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/admin/products" className="text-2xl font-bold text-black">
                NewWay Labs Admin
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h1 className="text-4xl font-bold text-black mb-8">Edit Product: {product.title}</h1>
        {message && <p className="text-green-600 mb-4">{message}</p>}
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              value={product.title}
              onChange={(e) => setProduct({ ...product, title: e.target.value })}
              required
              disabled // Title is used as ID, so it shouldn't be editable here unless we implement a more robust ID system
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm text-black disabled:bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700">Short Description</label>
            <textarea
              id="shortDescription"
              value={product.shortDescription}
              onChange={(e) => setProduct({ ...product, shortDescription: e.target.value })}
              required
              rows={4}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm text-black"
            ></textarea>
          </div>
          <div>
            <label htmlFor="appStoreLink" className="block text-sm font-medium text-gray-700">App Store Link</label>
            <input
              type="url"
              id="appStoreLink"
              value={product.appStoreLink}
              onChange={(e) => setProduct({ ...product, appStoreLink: e.target.value })}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm text-black"
            />
          </div>
          <div>
            <label htmlFor="googlePlayLink" className="block text-sm font-medium text-gray-700">Google Play Link</label>
            <input
              type="url"
              id="googlePlayLink"
              value={product.googlePlayLink}
              onChange={(e) => setProduct({ ...product, googlePlayLink: e.target.value })}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm text-black"
            />
          </div>
          <div>
            <label htmlFor="iconPath" className="block text-sm font-medium text-gray-700">Icon File</label>
            <input
              type="file"
              id="iconPath"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 block w-full text-black file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
            />
            {previewUrl && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Current Icon Preview:</p>
                <Image src={previewUrl} alt="Icon Preview" width={64} height={64} className="rounded-lg border border-gray-200 p-2" />
                <p className="text-xs text-gray-500 mt-1">Path: {previewUrl}</p>
              </div>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Update Product
            </button>
            <Link href="/admin/products" className="ml-4 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
} 