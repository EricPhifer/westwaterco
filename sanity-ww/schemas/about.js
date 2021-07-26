import { AiOutlineDollarCircle as icon } from 'react-icons/ai';

export default {
  name: 'about',
  title: 'About Us',
  type: 'document',
  icon,
  fields: [
    {
      name: 'dateGenerated',
      title: 'Date & Time of Report',
      type: 'datetime',
      options: {
        timeFormat: 'h:mmA',
        dateFormat: 'dddd, MMMM Do YYYY',
        timeZone: 'America/Denver',
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'dateGenerated',
        maxLength: 100,
      },
    },
    {
      name: 'treasurersName',
      title: 'Treasurers Name',
      type: 'string',
    },
    {
      name: 'totalBalance',
      title: 'Total Balance',
      type: 'number',
    },
    {
      name: 'expenses',
      title: 'Expenses',
      type: 'string',
    },
    {
      name: 'notes',
      title: 'Notes on this months budget',
      type: 'text',
    },
    {
      name: 'approvedBudget',
      title: 'Was budget approved?',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      title: 'title',
      description: 'treasurersName',
      date: 'dateGenerated',
      media: 'image',
    },
    prepare(selection) {
      const { date } = selection;
      return {
        title: `${date.split('-')[1]} / ${date.split('-')[2].slice(0, 2)} / ${
          date.split('-')[0]
        }`,
      };
    },
  },
};
