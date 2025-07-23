import { promises as fs } from 'fs';
import path from 'path';

const productsFilePath = path.join(process.cwd(), 'data', 'products.json');

export async function POST(request: Request) {
  try {
    const newProduct = await request.json();

    let products = [];

    try {
      const fileContents = await fs.readFile(productsFilePath, 'utf8');
      products = JSON.parse(fileContents);
    } catch (readError: any) {
      if (readError.code !== 'ENOENT') {
        console.error('Error reading products.json:', readError);
        return new Response(JSON.stringify({ error: 'Failed to read products data' }), { status: 500 });
      }
      // If file doesn't exist, products remains an empty array
    }

    products.push(newProduct);

    await fs.writeFile(productsFilePath, JSON.stringify(products, null, 2), 'utf8');

    return new Response(JSON.stringify({ message: 'Product added successfully', product: newProduct }), { status: 201 });
  } catch (error) {
    console.error('Error adding product:', error);
    return new Response(JSON.stringify({ error: 'Failed to add product' }), { status: 500 });
  }
}

export async function GET() {
  try {
    const fileContents = await fs.readFile(productsFilePath, 'utf8');
    const products = JSON.parse(fileContents);
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      // products.json does not exist, return empty array
      return new Response(JSON.stringify([]), { status: 200 });
    }
    console.error('Error reading products.json:', error);
    return new Response(JSON.stringify({ error: 'Failed to retrieve products' }), { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { title } = await request.json();

    const fileContents = await fs.readFile(productsFilePath, 'utf8');
    let products = JSON.parse(fileContents);

    const initialLength = products.length;
    products = products.filter((product: any) => product.title !== title);

    if (products.length === initialLength) {
      return new Response(JSON.stringify({ error: 'Product not found' }), { status: 404 });
    }

    await fs.writeFile(productsFilePath, JSON.stringify(products, null, 2), 'utf8');

    return new Response(JSON.stringify({ message: 'Product deleted successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error deleting product:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete product' }), { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const updatedProduct = await request.json();
    const { title } = updatedProduct;

    const fileContents = await fs.readFile(productsFilePath, 'utf8');
    let products = JSON.parse(fileContents);

    const productIndex = products.findIndex((product: any) => product.title === title);

    if (productIndex === -1) {
      return new Response(JSON.stringify({ error: 'Product not found' }), { status: 404 });
    }

    products[productIndex] = updatedProduct;

    await fs.writeFile(productsFilePath, JSON.stringify(products, null, 2), 'utf8');

    return new Response(JSON.stringify({ message: 'Product updated successfully', product: updatedProduct }), { status: 200 });
  } catch (error) {
    console.error('Error updating product:', error);
    return new Response(JSON.stringify({ error: 'Failed to update product' }), { status: 500 });
  }
} 