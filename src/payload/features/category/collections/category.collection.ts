import type { CollectionConfig } from 'payload'

const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: { th: 'หมวดหมู่' },
    plural: { th: 'หมวดหมู่' },
  },
  admin: {
    useAsTitle: 'name',
    group: 'Content',
    defaultColumns: ['name', 'slug', 'isActive', 'updatedAt'],
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
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}

export default Categories
