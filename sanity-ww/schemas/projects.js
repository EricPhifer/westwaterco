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
      description: 'Select right for Engineering, left for Environmental',
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
      name: 'gallery',
      title: 'Gallery',
      type: 'gallery',
    },
  ],
  preview: {
    select: {
      title: 'mainTitle',
      isEngineering: 'isEngineering',
      media: 'image',
    },
    prepare(selection) {
      const { title, media, isEngineering } = selection;
      return {
        title,
        subtitle: isEngineering ? 'Engineering' : 'Environmental',
        media,
      };
    },
  },
};
