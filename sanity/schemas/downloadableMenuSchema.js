export default defineType({
    name: 'taxCreditsPage',
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
  