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

  @media only screen and (max-width: 885px) {
    #members {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media only screen and (max-width: 480px) {
    #members {
      grid-template-columns: 1fr;
    }
  }

  article {
    margin-bottom: 2.5em;
  }

  a:hover {
    color: var(--blue);
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<Header title="Team" />

<section>
  <h2>How We Work</h2>
  <p>
    We are dedicated to making the best possible product while making sure every member has ownership over at least one feature.
    A flat organizational structure makes it known that no one voice is more important than another.
    All members' decisions, ideas, and criticisms are equally valued.
  </p>

  <p>
    Since we want all members to feel equal, we have deliberately chosen an engineering workflow that prioritizes collaboration and communication as opposed to competition.
    Additionally, we use industry standard development tools and frameworks to accomplish our goals and ensure that everyone is learning together as we grow as an organization.
  </p>
</section>

<section>
  <h2>Meet Our Team</h2>
  <p>Meet our amazing team of developers and designers.</p>
  <article id="members">
    {#each members as member}
      <MemberCard {member} />
    {/each}
  </article>
</section>
