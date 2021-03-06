<script lang="ts">
  import Form from '../../components/Form.svelte';
  import Header from '../../components/Header.svelte';

  import type {
    FormType,
    FormBlockInput,
    FormBlockSelect,
    FormBlockTextArea,
    FormBlockUpload,
  } from '../../utils/types';

  const formData: FormType = {
    isOpen: false,
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
        desc:
          'A specialization entails demonstrated and extensive experience. This is NOT a required question, being a generalist is perfectly fine!',
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

<style>
  h4 {
    font-family: var(--font-stack);
    font-weight: 700;
    margin-top: 0.5em;
  }

  p,
  ul > li {
    opacity: 1;
    font-weight: 400;
  }
</style>

<svelte:head>
  <title>Software Developer Application | Illinois Labs</title>
</svelte:head>

<Header title="Software Development at Illinois Labs" width={600} />

<section style="max-width: 600px;">
  <p>
    Software developers at Illinois Labs work in a collaborative coding environment to develop web applications that
    improve student life. Within the team, you will have ownership of certain user-facing features on these
    applications.
  </p>
  <p>
    You will also be involved in testing, coming up with new ideas and improving features of existing applications.
    <strong>Be ready to put in up to 10 hours of work per week.</strong>
  </p>
  <h4>Preferred Qualifications</h4>
  <ul>
    <li>Familiarity with JavaScript, Python, C++, Java, and/or other high-level programming languages.</li>
    <li>Working knowledge of Git.</li>
    <li>Knowledge of web services and surrounding concepts (GraphQL/REST, DOM, HTTP) is a plus.</li>
    <li>Demonstrated interest in building solutions to problems or programming for fun.</li>
  </ul>
  <h4>Bonus Points</h4>
  <ul>
    <li>
      A specialization like frontend engineering, API development, infrastructure, applied machine learning, data
      visualization, or another sub-discipline.
    </li>
  </ul>
  <p><strong>All applicants are welcome, and you'll hear back from us shortly! Apply below.</strong></p>
</section>

<Form {formData} />
