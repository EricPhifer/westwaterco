export default {
  name: 'Gallery',
  title: 'Gallery',
  type: 'object',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
};
