import { MdLink } from 'react-icons/md';

export default {
  title: 'About',
  icon: MdLink,
  name: 'about',
  type: 'document',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },
  ],
};
