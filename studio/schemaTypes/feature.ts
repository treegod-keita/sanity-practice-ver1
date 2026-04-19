import {defineField, defineType} from 'sanity'

export const featureType = defineType({
  name: 'feature',
  title: '特徴',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'タイトル',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 15,
      },
    }),
    defineField({
      name: 'image',
      title: 'サムネイル画像',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: '投稿日時',
      type: 'datetime',
    }),
    defineField({
      name: 'tags',
      title: 'タグ',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'tag'}],
        },
      ],
    }),
  ],
})
