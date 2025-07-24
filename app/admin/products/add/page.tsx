'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  title: string;
  shortDescription: string;
  appStoreLink: string;
  googlePlayLink: string;
  iconPath: string;
}

export default function AddProductPage() {
  const router = useRouter();
  const [product, setProduct] = useState<Product>({
    title: '',
    shortDescription: '',
    appStoreLink: '',
    googlePlayLink: '',
    iconPath: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setSelectedFile(null);
      setPreviewUrl(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!selectedFile) {
      setError('Please select an icon file.');
      return;
    }

    const formData = new FormData();
    formData.append('icon', selectedFile);

    let newIconPath = '';

    try {
      const uploadResponse = await fetch('/api/upload-icon', {
        method: 'POST',
        body: formData,
      });

      if (uploadResponse.ok) {
        const uploadData = await uploadResponse.json();
        newIconPath = uploadData.filePath;
      } else {
        const errorData = await uploadResponse.json();
        setError(errorData.error || 'Failed to upload icon');
        return;
      }
    } catch (err) {
      console.error('Icon upload error:', err);
      setError('An unexpected error occurred during icon upload.');
      return;
    }

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...product, iconPath: newIconPath }),
      });

      if (response.ok) {
        setMessage('Product added successfully!');
        router.push('/admin/products');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to add product');
      }
    } catch (err) {
      console.error('Add error:', err);
      setError('An unexpected error occurred.');
    }
  };

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
        <h1 className="text-4xl font-bold text-black mb-8">Add New Product</h1>
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
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm text-black"
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
              required
              className="mt-1 block w-full text-black file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
            />
            {previewUrl && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Icon Preview:</p>
                <Image src={previewUrl} alt="Icon Preview" width={64} height={64} className="rounded-lg border border-gray-200 p-2" />
              </div>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Add Product
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