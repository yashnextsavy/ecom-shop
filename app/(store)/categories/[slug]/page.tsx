import ProductsView from '@/components/ProductsView';
import { getAllCategories } from '@/sanity/lib/products/getAllCategories';
import { getProductsByCategories } from '@/sanity/lib/products/getProductsByCategories';
import React from 'react'

async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const products = await getProductsByCategories(slug);
    const category = await getAllCategories();
    console.log("products, category", products, category);
    return (
        <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
            <div className="w-full container">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    {slug.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}{" "}Collection
                </h1>
                <ProductsView products={products} categories={category} />
            </div>
        </div>
    )
}

export default CategoryPage