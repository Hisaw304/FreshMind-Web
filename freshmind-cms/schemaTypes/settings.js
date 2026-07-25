import {defineField, defineType} from 'sanity'

export const settingsType = defineType({
  name: 'settings',
  title: 'Website Settings',
  type: 'document',

  fields: [
    defineField({
      name: 'siteName',
      title: 'Website Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'logo',
      title: 'Website Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    }),

    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),

    defineField({
      name: 'address',
      title: 'Business Address',
      type: 'text',
      rows: 2,
    }),

    defineField({
      name: 'footerText',
      title: 'Footer Copyright',
      type: 'string',
    }),

    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
    }),

    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    }),

    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    }),

    defineField({
      name: 'twitter',
      title: 'X (Twitter) URL',
      type: 'url',
    }),

    defineField({
      name: 'defaultSeoTitle',
      title: 'Default SEO Title',
      type: 'string',
    }),

    defineField({
      name: 'defaultSeoDescription',
      title: 'Default SEO Description',
      type: 'text',
      rows: 3,
    }),
  ],
})
