import { GiTreeBranch as icon } from 'react-icons/gi';

export default {
  name: 'environmental',
  title: 'Environmental',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Title that will go immediately below image',
    },
    {
      name: 'contents',
      title: 'Content',
      type: 'array',
      description: 'Content that will go immediately below image',
      of: [{ type: 'text' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
