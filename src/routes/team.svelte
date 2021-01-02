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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-row-gap: 1.5em;
    grid-template-rows: 3em 3em;
    width: 100%;
    margin: 2em 0 0 0;
    justify-content: space-around;
    opacity: 0.5;
  }

  .companies div {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;

    user-select: none;
    -ms-user-drag: none;
    -moz-user-drag: none;
    -webkit-user-drag: none;

    user-drag: none;
    -ms-user-drag: none;
    -moz-user-drag: none;
    -webkit-user-drag: none;
  }

  .companies div img {
    object-fit: contain;
    max-height: 1.5em;
    max-width: 8em;
  }

  @media only screen and (max-width: 885px) {
    #members {
      grid-template-columns: 1fr 1fr;
    }
    .companies {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media only screen and (max-width: 480px) {
    #members {
      grid-template-columns: 1fr;
    }
    .companies {
      grid-template-columns: 1fr;
    }
  }

  a:hover {
    color: var(--blue);
  }

  article.split-pane {
    display: flex;
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
    flex: 2;
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<Header title="Team" />

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

<section>
  <h2>Leadership</h2>
  <article id="members">
    {#each members as member}
      <MemberCard {member} />
    {/each}
  </article>
</section>

<section>
  <h2>Where We Work</h2>
  <article class="companies">
    <div><img src="logos/facebook.svg" alt="Facebook Logo" draggable="false" /></div>
    <div style="padding: 1em; margin-top: -0.8em; box-sizing: border-box;">
      <img src="logos/uber.svg" alt="Uber Logo" draggable="false" />
    </div>
    <div><img src="logos/hubspot.svg" alt="HubSpot Logo" draggable="false" /></div>
    <div style="padding: 0.8em; margin-top: -0.93em; box-sizing: border-box;">
      <img src="logos/intel.svg" alt="Intel Logo" draggable="false" />
    </div>
    <div><img src="logos/jellyfish.svg" alt="JellyfishAI Logo" draggable="false" /></div>
    <div><img src="logos/abbvie.svg" alt="AbbVie Logo" draggable="false" /></div>
  </article>
</section>
