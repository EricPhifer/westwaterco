import { FcEngineering as icon } from 'react-icons/fc';

export default {
  name: 'engineering',
  title: 'Engineering',
  type: 'document',
  icon,
  fields: [
    {
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
      description: 'Title that will go immediately below image',
    },
    {
      name: 'mainContent',
      title: 'Main Content',
      type: 'text',
      description: 'Content that will go immediately below image',
    },
    {
      name: 'serviceBreakdown',
      title: 'Breakdown of Services',
      type: 'array',
      of: [
        {
          name: 'EngServices',
          title: 'Engineering Services',
          type: 'EngServices',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'mainTitle',
    },
  },
};
