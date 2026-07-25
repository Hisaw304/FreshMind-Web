import {defineField, defineType} from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Authors',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 4,
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
  ],

  preview: {
    select: {
      title: 'name',
      media: 'photo',
    },
  },
})
