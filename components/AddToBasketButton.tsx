"use client";
import useBasketStore from "@/app/(store)/store";
import { ProductType } from "@/sanity.types";
import { useEffect, useState } from "react";

interface AddToBasketButtonProps {
    product: ProductType;
    disabled?: boolean;
}

function AddToBasketButton({ product, disabled }: AddToBasketButtonProps) {
    const { addItem, removeItem, getItemCount } = useBasketStore();
    const itemCount = getItemCount(product._id);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <div className="flex items-center border-1 border-green-900 w-fit rounded space-x-2">
            <button
                onClick={() => product?._id && removeItem(product._id)}
                className={`w-10 h-10 flex items-center justify-center transition-colors rounded-s duration-200 ${itemCount === 0 ? "bg-gray-100 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
                    }`}
                disabled={itemCount === 0 || disabled}
            >
                <span className={`text-xl font-bold ${itemCount === 0 ? "text-gray-400" : "text-gray-600"}`}>
                    -
                </span>
            </button>

            <span className="w-9 text-center font-semibold">{itemCount}</span>

            <button
                onClick={() => {
                    if (product && itemCount < (product.stock ?? Infinity)) {
                        addItem(product);
                    }
                }}
                className={`w-10 h-10 flex items-center justify-center transition-colors rounded-e duration-200 ${itemCount >= (product.stock ?? Infinity) ? "bg-gray-400 cursor-not-allowed" : "bg-green-900 hover:bg-green-700"
                    }`}
                disabled={itemCount >= (product.stock ?? Infinity) || disabled}
            >
                <span className="text-xl font-bold text-gray-50">+</span>
            </button>
        </div>
    );
}

export default AddToBasketButton;
