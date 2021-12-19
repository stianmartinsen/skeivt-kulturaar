import { MdSettings } from 'react-icons/md';

export default {
  title: 'Configuration',
  icon: MdSettings,
  name: 'configuration',
  type: 'document',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        },
        {
          name: 'background',
          title: 'Background image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};
