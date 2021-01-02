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
    formLabel: 'UI/UX Designer Application',
    formDesc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
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
        name: 'website',
        label: 'Personal Portfolio Link',
        desc: 'Strongly recommended!',
        type: 'url',
        required: false,
        placeholder: 'https://example.com',
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
        name: 'process',
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
  <title>UI/UX Designer Application | Illinois Labs</title>
</svelte:head>

<Header title="Apply" />

<section>
  <Form {formData} />
</section>
