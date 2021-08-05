import { FcAbout as icon } from 'react-icons/fc';

export default {
  name: 'about',
  title: 'About Us',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
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
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'text' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'image',
    },
  },
};
