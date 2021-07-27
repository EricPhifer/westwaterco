import { AiOutlineHome as icon } from 'react-icons/ai';

export default {
  name: 'homepage',
  title: 'Home Page',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'contents',
      title: 'Content',
      type: 'array',
      of: [{ type: 'text' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
