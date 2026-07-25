import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Posts',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
    }),

    defineField({
      name: 'readingTime',
      title: 'Reading Time',
      type: 'number',
      description: 'Example: 5 (minutes)',
    }),

    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),

    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'body',
      title: 'Article',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'category.title',
      media: 'featuredImage',
    },
  },
})
