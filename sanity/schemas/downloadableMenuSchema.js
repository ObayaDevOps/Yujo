import { HomeIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'


export default {

    name: 'Downloadable Menu',
    icon: HomeIcon,
    type: 'file',
    title: 'DownloadableMenu',

    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (rule) => rule.required(),
      },
    ]
}
  