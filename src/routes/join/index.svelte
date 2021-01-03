<script lang="ts">
  import Header from '../../components/Header.svelte';

  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { cog, sitemap } from 'svelte-awesome/icons';
</script>

<style>
  details {
    padding-bottom: 1em;
  }

  details p {
    line-height: 2.6;
  }

  summary::-webkit-details-marker,
  summary::marker {
    color: var(--orange);
    font-size: 20px;
    margin-right: 2px;
  }

  h3 {
    font-family: var(--font-stack);
  }

  summary {
    padding: 0.65em 0;
    cursor: pointer;
    user-select: none;
    outline: none;
    border-bottom: 1px solid var(--dark);
  }

  summary h3 {
    display: inline;
    color: var(--dark);
  }

  summary h3 span {
    margin: 0 0.75em 0 0.25em;
  }

  .block-links {
    margin-top: 1em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: var(--mg);
  }

  .block-links a {
    text-decoration: none;
    display: flex;
    background-color: var(--off-white);
    color: var(--dark);
    box-sizing: border-box;
    padding: var(--mg);
    border-radius: var(--br);
  }

  .block-links a div:first-child {
    color: var(--light-blue);
  }

  .block-links div {
    display: flex;
    align-items: center;
  }

  .block-links a div:last-child {
    margin-left: var(--mg);
  }

  .block-links h3 {
    font-size: 36px;
    color: var(--light-blue);
    margin: 0;
    padding: 0;
  }
</style>

<svelte:head>
  <title>Join Us | Illinois Labs</title>
</svelte:head>

<Header title="Join Us" />
<section>
  <h2>Who We're Looking For</h2>
  <p>
    If you're a passionate developer or UI/UX desinger that wants to:
    </p>
    <ul>
      <li>Create projects that meet student needs at U of I</li>
      <li>Work in a collaborative environment</li>
      <li>Gain experiene and specific knowledge on software / design tools and frameworks</li>
    </ul>
  <p>...then we want you in our organization! We're still growing, and are always looking for new members to join our cause.</p>
  <h2>Open Positions</h2>
  <div class="block-links">
    <a href="/join/software">
      <div>
        <Icon data={cog} scale={5} />
      </div>
      <div>
        <h3>Software Developer</h3>
      </div>
    </a>
    <a href="/join/design">
      <div>
        <Icon data={sitemap} scale={4} />
      </div>
      <div>
        <h3>UI/UX Designer</h3>
      </div>
    </a>
  </div>
  <details>
    <summary>
      <h3><span>🛠</span>Software Developer</h3>
    </summary>
    <p>
      As a software developer for Illinois Labs, you will work in a collaborative coding environment to develop web
      applications that make students lives better on campus. On the team, you will work in a collaborative coding
      environment and have ownership of user-facing features on these applications. You will also be involved in
      directing system / application testing, coming up with new ideas, improving features of existing applications, and
      are expected to put in 5-10 hours of work per week.
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
    <p>
      If you're interested, apply by clicking the link below! All applicants are welcome, and you'll hear back from us
      shortly!
    </p>
    <a href="." class="button">Apply For This Position</a>
  </details>
  <details>
    <summary>
      <h3><span>🎨</span>UI/UX Designer</h3>
    </summary>
    <p>
      As an UI/UX Designer for Illinois Labs, you will be responsible for delivering the best user experience for the
      students that use our products. On the team, you will work in a collaborative coding environment and have
      ownership of user-facing features on these applications. You will be designing user interfaces and making use of
      frontend frameworks (React, Vue, etc.) to display content, and are expected to put in 5-10 hours of work per week.
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
      If you're interested, apply by clicking the link below! All applicants are welcome, and you'll hear back from us
      shortly!
    </p>
    <p><strong>Attaching or linking a portfolio of work is optional, but strongly recommended.</strong></p>
    <a href="." class="button">Apply For This Position</a>
  </details>
</section>
