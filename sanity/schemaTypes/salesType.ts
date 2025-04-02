import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const salesType = defineType({
    name: "sale",
    title: "Sale",
    type: "document",
    icon: TagIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Sale Title",
        }),
        defineField({
            name: "description",
            title: "Sale Description",
            type: "text",
        }),
        defineField({
            name: "discountAmount",
            title: "Discount Amount",
            type: "number",
            description: "Enter the discount percentage or fixed amount.",
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: "couponCode",
            title: "Coupon Code",
            type: "string",
            description: "Enter a unique coupon code for this sale.",
            validation: (Rule) => Rule.required().min(3).max(20),
        }),
        defineField({
            name: "validFrom",
            title: "Valid From",
            type: "datetime",
            description: "Start date and time for the sale.",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "validUntil",
            title: "Valid Until",
            type: "datetime",
            description: "End date and time for the sale.",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "isActive",
            title: "Is Active",
            type: "boolean",
            description: "Toggle whether this sale is currently active.",
            initialValue: true,
        }),
        defineField({
            name: "minimumPurchaseAmount",
            title: "Minimum Purchase Amount",
            type: "number",
            description: "Minimum purchase amount required to use this sale.",
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: "maxRedemptions",
            title: "Max Redemptions",
            type: "number",
            description: "Maximum number of times this sale can be used.",
            validation: (Rule) => Rule.min(1),
        }),
        defineField({
            name: "saleImage",
            title: "Sale Image",
            type: "image",
            description: "Upload an image related to this sale.",
            options: {
                hotspot: true, // Enables cropping inside Sanity Studio
            },
        }),
    ],
    preview: {
        select: {
            title: "title",
            discountAmount: "discountAmount",
            couponCode: "couponCode",
            isActive: "isActive",
            validUntil: "validUntil",
            media: "saleImage", // Uses the uploaded image in preview
        },
        prepare(selection) {
            const { title, discountAmount, couponCode, isActive, validUntil, media } = selection;
            const status = isActive ? "Active" : "Inactive";
            return {
                title: `${title}`,
                subtitle: `${discountAmount}% off - Code: ${couponCode} - [${status}]`,
                media, // Display image in preview
            };
        },
    },
});
