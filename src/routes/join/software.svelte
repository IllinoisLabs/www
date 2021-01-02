<script lang="ts">
  import Form from '../../components/Form.svelte';
  import Header from '../../components/Header.svelte';

  import type {
    FormBlock,
    FormBlockInput,
    FormBlockSelect,
    FormBlockTextArea,
    FormBlockUpload,
  } from '../../utils/types';

  const formData: { formLabel: string; formName: string; formDesc: string; blocks: FormBlock[] } = {
    formLabel: 'Software Developer Application',
    formDesc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
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
        name: 'website',
        label: 'Personal Website or LinkedIn',
        type: 'url',
        required: false,
        placeholder: 'https://linkedin.com/in/example',
      } as FormBlockInput,
      {
        name: 'resume',
        label: 'Resume',
        desc: 'Not required, but strongly recommended.',
        required: false,
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
        options: [
          'Computer Science',
          'Computer Engineering',
          'Mathematics, Statistics, or Physics',
          'Engineering',
          'Other',
        ],
        allowMultiple: false,
      } as FormBlockSelect,
      {
        name: 'languages',
        label: 'What programming languages and frameworks are you proficient in?',
        desc: 'Check all you are comfortable with',
        required: true,
        options: ['JavaScript', 'Python', 'C++', 'Java', 'Go', 'Other'],
        allowMultiple: true,
      } as FormBlockSelect,
      {
        name: 'specialization',
        label: 'Do you have a specialization?',
        desc: 'This is NOT a required question, being a generalist is perfectly fine!',
        required: false,
        options: [
          'Not Applicable',
          'Frontend Development',
          'Backend Development',
          'Data Science',
          'Other (Security, Mobile, Firmware, etc)',
        ],
        allowMultiple: false,
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
</script>

<svelte:head>
  <title>Software Developer Application | Illinois Labs</title>
</svelte:head>

<Header title="Apply" />

<section>
  <Form {formData} />
</section>
