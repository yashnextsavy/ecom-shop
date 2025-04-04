import CtaBanner from "@/components/CtaBanner";
import ProductsView from "@/components/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
    const products = await getAllProducts();
    const categories = await getAllCategories();

    console.log("products", products);
    return (
        <>
            <CtaBanner />
            <div className="container mx-auto px-4">
                {/* get all products */}
                <div className="flex flex-col items-center justify-top min-h-screen py-4">
                    <ProductsView products={products} categories={categories} />
                </div>
            </div>
        </>
    );
}