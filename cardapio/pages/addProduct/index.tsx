import React from 'react';
import { Button, Input } from '@hero-ui/react';
import 'tailwindcss/tailwind.css';

const AddProduct: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
                            Product Name
                        </label>
                        <Input id="productName" type="text" placeholder="Enter product name" className="w-full" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productPrice">
                            Product Price
                        </label>
                        <Input id="productPrice" type="number" placeholder="Enter product price" className="w-full" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productDescription">
                            Product Description
                        </label>
                        <Input id="productDescription" type="text" placeholder="Enter product description" className="w-full" />
                    </div>
                    <div className="flex items-center justify-between">
                        <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Add Product
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;</div>    