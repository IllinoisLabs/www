<script lang="ts">
  import Form from '../../components/Form.svelte';
  import Header from '../../components/Header.svelte';
  import { applications } from '../../utils/data/recruitment';

  const { design: formData } = applications;
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
