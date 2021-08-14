<script lang="ts">
  import Header from '../components/Header.svelte';
  import MemberCard from '../components/about/MemberCard.svelte';
  import { members } from '../utils/data/members';

  type panel = 'current' | 'Alumni';

  let panel: panel = 'current';
</script>

<style>
  .member-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    row-gap: 0.5em;
    margin: 1em var(--mg) 0;
  }

  .member-grid > * {
    grid-column: span 2;
  }

  article {
    margin-bottom: 2.5em;
  }

  .companies {
    margin: 0 auto 1.5em;
  }

  .companies h3 {
    text-align: center;
    font-family: var(--font-stack);
  }
  .companies > img {
    margin: 1em auto;
    width: 100%;
    opacity: 0.6;
  }

  h2 {
    margin-bottom: 1em;
  }

  h2 > span {
    cursor: pointer;
  }

  h2 > span:first-child {
    margin-right: 1em;
  }

  h2 > span:not(.active) {
    opacity: 0.33;
  }

  @media only screen and (min-width: 886px) {
    /* Triple Orphan */

    .member-grid > *:last-child:nth-child(4n - 1) {
      grid-column: 6 / 8;
    }

    .member-grid > *:nth-last-child(2):nth-child(4n + 2) {
      grid-column: 4 / 6;
    }

    .member-grid > *:nth-last-child(3):nth-child(4n + 1) {
      grid-column: 2 / 4;
    }
  }

  @media only screen and (max-width: 885px) {
    .member-grid {
      grid-template-columns: repeat(4, 1fr);
    }

    /* Single Orphan */

    .member-grid > * {
      grid-column: span 2;
    }
  }

  .companies > img.mobile {
    display: none;
    max-width: 480px;
    margin: 1.25em auto 2.5em;
  }

  @media only screen and (max-width: 520px) {
    .member-grid {
      grid-template-columns: 1fr;
    }

    .member-grid > * {
      grid-column: span 1;
    }
  }

  @media only screen and (max-width: 760px) {
    .companies > img:not(.mobile) {
      display: none;
    }

    .companies > img.mobile {
      display: block;
    }
  }

  article.split-pane {
    display: flex;
  }

  figure {
    margin: 0;
  }

  figure img {
    width: 100%;
  }

  article.split-pane figure {
    flex: 3;
    display: flex;
    align-items: flex-start;
  }

  article.split-pane div {
    flex: 7;
  }

  @media only screen and (max-width: 760px) {
    article.split-pane {
      flex-flow: column;
    }

    article.split-pane figure {
      max-width: 20em;
      margin: 1em auto 2em;
    }
  }
</style>

<svelte:head>
  <title>Team | Illinois Labs</title>
</svelte:head>

<Header
  title="Team"
  desc="We're a group of motivated student developers and designers at the University of Illinois."
  graphicSrc="/team.svg" />

<section class="companies center">
  <h3>Where We Work</h3>
  <img src="logos/companies.svg" alt="" draggable="false" />
  <img src="logos/companies-sm.svg" alt="" class="mobile" draggable="false" />
</section>
<br />
<section class="center">
  <h2>How We Work</h2>
  <article class="split-pane">
    <div>
      <p style="margin-top: 0">
        We are dedicated to making the best possible product while making sure every member has ownership over at least
        one feature. A flat organizational structure makes it known that no one voice is more important than another.
        All members' decisions, ideas, and criticisms are equally valued.
      </p>

      <p style="margin-bottom: 0">
        Since we want all members to feel equal, we have deliberately chosen an engineering workflow that prioritizes
        collaboration and communication as opposed to competition. Additionally, we use industry standard development
        tools and frameworks to accomplish our goals and ensure that everyone is learning together as we grow as an
        organization.
      </p>
    </div>
    <figure><img src="/speak.svg" alt="" /></figure>
  </article>
</section>

<section class="center">
  <h2>
    <span on:click={() => (panel = 'current')} class:active={panel === 'current'}>Our Team</span>
    <span on:click={() => (panel = 'Alumni')} class:active={panel === 'Alumni'}>Alumni</span>
  </h2>
  <article class="member-grid" style="min-height: 500px">
    {#each members.filter((m) => (panel === 'current' ? !m.isAlumni : m.isAlumni)) as member}
      <div>
        <MemberCard {member} />
      </div>
    {/each}
  </article>
</section>

<section class="center recruiting-open" style="margin-top: 2.75em">
  <h2 style="margin-bottom: 0">Join Us</h2>
  <p>
    If you'd like to be part of our team, apply below. We're always looking for talented developers and designers to
    help us create new products.
  </p>
  <div class="button-wrapper"><a href="/join" class="button">Join Us</a></div>
</section>
