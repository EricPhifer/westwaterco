import { GrHome as icon } from 'react-icons/gr';

export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  icon,
  fields: [
    {
      name: 'welcome',
      title: 'Welcome Message',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Welcome Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'contents',
      title: 'Content',
      type: 'array',
      of: [
        {
          name: 'HomeContent',
          title: 'Title & Content to Display',
          type: 'HomeContent',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'welcome',
      media: 'image',
    },
  },
};
