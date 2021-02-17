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
  <title>UI/UX Designer Application | Illinois Labs</title>
</svelte:head>

<Header title="UI/UX Design @ Illinois Labs" />

<section style="max-width: 600px;">
  <p>
    UI/UX Designers at Illinois Labs are be responsible for delivering the best user experience for the students that
    use our products. This involves producing wireframes and high fidelity prototypes as well as user research when
    appropriate.
  </p>
  <p>
    You will be designing user interfaces by keeping both users and development requirements in mind.
    <strong>Be ready to put in up to 10 hours per week.</strong>
  </p>
  <h4>Preferred Qualifications</h4>
  <ul>
    <li>
      Ability to build out application designs end-to-end (i.e. from user research to wireframes to hi-fidelity
      prototypes).
    </li>
    <li>Ability to take concepts such as user goals and adapt those ideas into a usable solution and interface.</li>
    <li>
      Experience with hi-fidelity design tools like Figma or Sketch and other prototyping software like Balsamiq,
      Photoshop, Illustrator, etc.
    </li>
  </ul>
  <h4>Bonus Points</h4>
  <ul>
    <li>
      Development skills (specifically converting mockups into CSS/markup). This extends to being comfortable with
      frontend tools like HTML, CSS, JavaScript, and frameworks like React, Vue, Angular, etc.
    </li>
    <li>Experience with branding design.</li>
  </ul>
  <p>
    <strong>All applicants are welcome, and you'll hear back from us shortly! Apply below.</strong>
    <br />
    Attaching or linking a portfolio of work is optional, but strongly recommended.
  </p>
</section>

<Form {formData} />
