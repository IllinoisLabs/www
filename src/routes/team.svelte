<script lang="ts">
  import Header from '../components/Header.svelte';
  import MemberCard from '../components/about/MemberCard.svelte';
  import { members } from '../utils/data';
</script>

<style>
  #members {
    margin-top: 1em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 1.25em;
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

  @media only screen and (max-width: 885px) {
    #members {
      grid-template-columns: 1fr 1fr;
    }
  }

  .companies > img.mobile {
    display: none;
    max-width: 480px;
    margin: 1.25em auto 2.5em;
  }

  @media only screen and (max-width: 480px) {
    #members {
      grid-template-columns: 1fr;
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
    flex: 1;
    display: flex;
    align-items: flex-start;
  }

  article.split-pane div {
    flex: 3;
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
  <title>Team</title>
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
<section>
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
    <figure><img src="/about.svg" alt="about graphic" /></figure>
  </article>
</section>

<section class="center">
  <h2>Leadership</h2>
  <article id="members">
    {#each members as member}
      <MemberCard {member} />
    {/each}
  </article>
</section>

<section class="center">
  <h2 style="margin-bottom: 0">Join Us</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta reprehenderit quidem nisi nobis laborum, natus
    necessitatibus amet adipisci vero quisquam quibusdam dignissimos id, itaque beatae officia quo, repellendus
    voluptatibus non.
  </p>
  <div class="button-wrapper"><a href="/join" class="button">Join Us</a></div>
</section>
