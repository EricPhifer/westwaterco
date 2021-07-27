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
