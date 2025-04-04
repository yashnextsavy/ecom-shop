import { Category, ProductType } from "@/sanity.types";
import ProductGrid from "./ProductGrid";
import { CategorySelectorComponent } from "./CategorySelectorComponent";


interface ProductsViewProps {
    products: ProductType[];
    categories: Category[];
}

const ProductsView = ({ products, categories }: ProductsViewProps) => {
    // console.log("ProductsView", products)
    return (
        <div className="flex flex-col">
            {/* categories */}
            <div className="w-full sm:w-[200px]">
                <CategorySelectorComponent categories={categories} />
            </div>

            {/* products */}
            <div className="flex-1">
                <div>
                    <ProductGrid products={products} />
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default ProductsView;
