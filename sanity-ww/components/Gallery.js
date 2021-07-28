export default {
  name: 'gallery',
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
    {
      name: 'display',
      title: 'Display as',
      type: 'string',
      description: 'How should we display these images?',
      options: {
        list: [
          { title: 'Stacked on top of eachother', value: 'stacked' },
          { title: 'In-line', value: 'inline' },
          { title: 'Carousel', value: 'carousel' },
        ],
        layout: 'radio', // <-- defaults to 'dropdown'
      },
    },
    {
      name: 'zoom',
      title: 'Zoom enabled',
      type: 'boolean',
      description: 'Enable zooming of images?',
    },
  ],
};
