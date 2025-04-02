import { BasketIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export const orderType = defineType({
    name: "order",
    title: "Order",
    type: "document",
    icon: BasketIcon,
    fields: [
        defineField({
            name: "orderNumber",
            title: "Order Number",
            type: "string",
            description: "Unique order number for tracking",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "stripeSessionId",
            title: "Stripe Checkout Session ID",
            type: "string",
            description: "Stripe checkout session identifier",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "stripeCustomerId",
            title: "Stripe Customer ID",
            type: "string",
            description: "Stripe customer identifier",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "createdAt",
            title: "Created At",
            type: "datetime",
            description: "Order creation date and time",
            initialValue: () => new Date().toISOString(),
            validation: (Rule) => Rule.required(),
        }),
    ],
});
