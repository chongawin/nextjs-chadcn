import type { CollectionConfig } from 'payload'

const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: { th: 'สินค้า' },
    plural: { th: 'สินค้า' },
  },
  admin: {
    useAsTitle: 'name',
    group: 'Content',
    defaultColumns: ['name', 'slug', 'price', 'isActive', 'updatedAt'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'text',
      localized: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}

export default Products
