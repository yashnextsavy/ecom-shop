import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType, Preview } from "sanity";

export const productType = defineType({
    name: 'productType',
    title: 'Product type',
    type: 'document',
    icon: TrolleyIcon,
    fields: [
        defineField({
            name: "name",
            title: "Product Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 90,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Product Image",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "blockContent",
        }),
        defineField({
            name: "price",
            title: "Price",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }],
        }),
        defineField({
            name: "stock",
            title: "Stock",
            type: "number",
            validation: (Rule) => Rule.min(0),
        }),
    ],
    preview: {
        select: {
            title: "name",
            media: "image",
            price: "price",
            stock: "stock",
        },
        prepare(select) {
            return {
                title: select.title,
                subtitle: `$${select.price} - (${select.stock})`,
                media: select.media,
            };
        },

    }
});