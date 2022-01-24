import type { FormType, FormBlockInput, FormBlockSelect, FormBlockTextArea, FormBlockUpload } from '../../../types';

const formData: FormType = {
  isOpen: false,
  formLabel: 'UI/UX Designer Application',
  formName: 'design-app',
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
      name: 'website',
      label: 'Personal Portfolio Link',
      desc: 'Strongly recommended! Feel free to link any profile you think best represents your work.',
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
      options: ['Art + Design', 'Industrial Design', 'Psychology', 'Computer Science', 'Other'],
      allowMultiple: false,
    } as FormBlockSelect,
    {
      name: 'process',
      label: 'What type of collaborative process do you prefer?',
      required: true,
      options: ['Owning portions of the product', 'Sharing all product decisions with others'],
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
