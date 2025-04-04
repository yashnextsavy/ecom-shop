"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import useBasketStore from "../store";
import { Button } from "@/components/ui/button";
import Link from "next/link";


function SuccessPage() {
    const searchParams = useSearchParams();
    const orderNumber = searchParams.get("orderNumber");
    const clearBasket = useBasketStore((state) => state.clearBasket);
    const sessionId = searchParams.get("session_id");

    useEffect(() => {
        if (orderNumber) {
            clearBasket();
        }
    }, [orderNumber, clearBasket]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-white text-center p-12 rounded-xl shadow-lg max-w-3xl w-full mx-4">
                <div className="flex justify-center mb-8">
                    <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                        <svg
                            className="h-8 w-8 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                </div>
                <h1 className="text-4xl font-bold mb-6">
                    Thank You for Your Order!
                </h1>

                <div className="border-t border-b border-gray-200 py-6 mb-4">
                    <p className="text-lg text-gray-700">
                        Your order has been confirmed and will be shipped <strong>shortly</strong>.
                    </p>

                    <div className="space-y-2">
                        {orderNumber && (
                            <p className="text-gray-600 flex items-center justify-center space-x-4">
                                <span>Order Number:</span>
                                <span className="font-mono text-sm text-green-900">
                                    {orderNumber}
                                </span>
                            </p>
                        )}

                        {sessionId && (
                            <p className="text-gray-600 flex items-center justify-center space-x-4">
                                <span>Transaction ID:</span>
                                <span className="font-mono text-sm text-green-900">{sessionId}</span>
                            </p>
                        )}
                    </div>
                </div>
                <div className="space-y-4">
                    <p className="text-gray-600">
                        A confirmation email has been sent to your registered email address.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">

                        <Link href="/orders" className="flex-1 relative flex justify-center sm:justify-start sm:flex-none item-center space-x-2 bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">View Order Details</Link>



                        <Link href="/" className="flex-1 relative flex justify-center sm:justify-start sm:flex-none item-center space-x-2 border border-gray-400 bg-gray-100 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">Continue Shopping</Link>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuccessPage;
