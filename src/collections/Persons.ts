import type { CollectionConfig } from 'payload';

export const Persons: CollectionConfig = {
  slug: 'persons',

  admin: {
    useAsTitle: 'surname',
    defaultColumns: ['name', 'surname', 'academicDegree'],
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },

    {
      name: 'surname',
      type: 'text',
      required: true,
    },

    {
      name: 'academicDegree',
      type: 'select',
      options: [
        {
          label: 'Engineer',
          value: 'Engineer',
        },
        {
          label: 'Master of Science in Engineering',
          value: 'MasterOfScienceInEngineering',
        },
        {
          label: 'Doctor in Engineering',
          value: 'DoctorInEngineering',
        },
        {
          label: 'Habilitated Doctor in Engineering',
          value: 'HabilitatedDoctorInEngineering',
        },
        {
          label: 'University Professor',
          value: 'UniversityProfessor',
        },
        {
          label: 'Professor',
          value: 'Professor',
        },
      ],
    },
  ],
};
