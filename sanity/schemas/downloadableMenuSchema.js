import { HomeIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'


export default defineType({

    name: 'Downloadable Menu',
    title: 'DownloadableMenu',
    icon: HomeIcon,
    type: 'file',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
    ]
})
  