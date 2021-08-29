import type { FormType, FormBlockInput, FormBlockSelect, FormBlockTextArea, FormBlockUpload } from '../../../types';

const formData: FormType = {
  isOpen: true,
  formLabel: 'Software Developer Application',
  formName: 'swe-app',
  blocks: [
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
    {
      name: 'major',
      label: 'Major',
      required: true,
      placeholder: 'e.g. Computer Science',
    } as FormBlockInput,
    {
      name: 'languages',
      label: 'What programming languages and frameworks are you proficient in?',
      desc: 'Check all you are comfortable with',
      required: true,
      options: ['JavaScript', 'Python', 'C++', 'Java', 'Go', 'Other'],
      allowMultiple: true,
    } as FormBlockSelect,
    {
      name: 'process',
      label: 'What type of engineering process do you prefer?',
      required: true,
      options: ['Moves fast, minimal process', 'Emphasizes industry best-practices, high quality code'],
      allowMultiple: false,
    } as FormBlockSelect,
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
  ],
};

export default formData;
