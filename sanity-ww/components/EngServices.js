export default {
  name: 'EngServices',
  title: 'Engineering Services',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: 'true',
      },
    },
    {
      name: 'serviceTitle',
      title: 'Service Title',
      type: 'string',
    },
    {
      name: 'serviceContent',
      title: 'Service Content',
      type: 'array',
      of: [{ type: 'text' }],
    },
  ],
};
