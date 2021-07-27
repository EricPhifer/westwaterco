import { AiOutlineProject as icon } from 'react-icons/ai';
import Gallery from '../components/Gallery';

export default {
  name: 'projects',
  title: 'Projects',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'mainTitle',
        maxLength: 100,
      },
    },
    {
      name: 'isEngineering',
      title: 'Is this an Engineering project?',
      type: 'boolean',
    },
    {
      name: 'mainContent',
      title: 'Main Content',
      type: 'array',
      of: [{ type: 'text' }],
      description: 'Content that will go immediately below image',
    },

    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: 'true',
      },
    },
    {
      name: 'Gallery',
      title: 'Gallery',
      type: 'gallery',
    },
  ],
  preview: {
    select: {
      title: 'mainTitle',
      media: 'image',
    },
    prepare: ({ isEngineering, title, media }) => {
      const isEng = isEngineering ? 'Engineering' : 'Environmental';
      return {
        title,
        subtitle: isEng,
        media,
      };
    },
  },
};
