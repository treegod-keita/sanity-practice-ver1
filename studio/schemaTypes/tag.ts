// src/sanity/schemaTypes/tagType.ts
import {defineField, defineType} from 'sanity'

export const tagType = defineType({
  name: 'tag',
  title: 'タグ',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'タグ名',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
