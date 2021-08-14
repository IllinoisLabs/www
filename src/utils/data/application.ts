import type { FormBlock, FormBlockInput, FormBlockSelect, FormBlockTextArea, FormBlockUpload } from '../types';

export const generalQuestions: FormBlock[] = [
  {
    name: 'name',
    label: 'Name',
    required: true,
    placeholder: 'Johnny Appleseed',
  } as FormBlockInput,
  {
    name: 'email',
    label: 'Email',
    required: true,
    placeholder: 'test@example.com',
    type: 'email',
  } as FormBlockInput,
  {
    name: 'pronouns',
    label: 'Preferred Pronouns',
    required: true,
    placeholder: 'she/her/hers',
  } as FormBlockInput,
  {
    name: 'linkedin',
    label: 'LinkedIn',
    type: 'url',
    required: false,
    placeholder: 'https://linkedin.com/in/example',
  } as FormBlockInput,
  {
    name: 'github',
    label: 'GitHub',
    type: 'url',
    required: false,
    placeholder: 'https://github.com/example',
  } as FormBlockInput,
  {
    name: 'website',
    label: 'Personal Website',
    type: 'url',
    required: false,
    placeholder: 'https://example.com',
  } as FormBlockInput,
  {
    name: 'resume',
    label: 'Resume',
    required: true,
    acceptableTypes: null,
  } as FormBlockUpload,
  {
    name: 'year',
    label: 'Year of Study',
    required: true,
    options: ['Freshman', 'Sophomore', 'Junior', 'Senior'],
  } as FormBlockSelect,
];

export const endingQuestions: FormBlock[] = [
  {
    name: 'team',
    label: 'What kind of team environment do you prefer?',
    required: true,
    options: [
      'Less structured. People wear multiple hats. Flat organization.',
      'Roles are clearly defined, leaders give clear goals.',
    ],
    allowMultiple: false,
  } as FormBlockSelect,
  {
    name: 'idea',
    label: 'Do you have a project idea in mind? If so, describe it in no more than 3 sentences.',
    required: false,
    rows: 3,
  } as FormBlockTextArea,
];
