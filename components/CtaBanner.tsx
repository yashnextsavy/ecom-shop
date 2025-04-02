import { COUPON_CODES } from "@/sanity/lib/sales/couponCodes";
import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

// Function to get Sanity image URL
const builder = imageUrlBuilder(client);
const urlFor = (source: any) => source ? builder.image(source).url() : "";

async function CtaBanner() {
    const sale = await getActiveSaleByCouponCode(COUPON_CODES.LASTCHANCE);

    console.log(sale);

    if (!sale?.isActive) {
        return null;
    }

    // Check if sale has an image, else fallback to gradient
    const backgroundImage = sale.saleImage
        ? `url('${urlFor(sale.saleImage)}')`
        : "linear-gradient(to right, #064e3b, black)"; // Green-900 to black gradient

    return (
        <div
            className="text-white px-6 py-10 mx-4 mt-2 rounded-lg shadow-lg bg-cover bg-center relative"
            style={{ backgroundImage, height: "300px" }}
        >
            {/* Dark overlay for readability */}
            <div
                className="rounded-lg"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0, 0, 0, 0.4)",
                }}
            ></div>

            <div className="relative z-10 container mx-auto flex items-center justify-between h-full">
                <div className="flex-1">
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-left mb-4">
                        {sale.title}
                    </h2>
                    <p className="text-left text-xl sm:text-2xl font-semibold mb-6">
                        {sale.description}
                    </p>

                    <div className="flex">
                        <div className="bg-white text-black py-4 px-6 rounded-full shadow-md transform hover:scale-105 transition duration-300">
                            <span className="font-bold text-base sm:text-xl">
                                Use code:{" "}
                                <span className="text-green-900 animate-pulse">{sale.couponCode}</span>
                            </span>
                            <span className="ml-2 font-bold text-base sm:text-xl">
                                for {sale.discountAmount}% OFF
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CtaBanner;
