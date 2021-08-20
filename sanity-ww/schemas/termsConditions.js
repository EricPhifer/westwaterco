import { TiDocumentText as icon } from 'react-icons/ti';

export default {
  name: 'termsconditions',
  title: 'Terms & Conditions',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'contents',
      title: 'Content',
      type: 'array',
      of: [
        {
          name: 'content',
          type: 'text',
        },
      ],
    },
    {
      name: 'order',
      title: 'Order to Display',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'order',
    },
  },
};
