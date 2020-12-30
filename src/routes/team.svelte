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
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illum deserunt iusto iste adipisci eos voluptatibus
    maiores, corrupti ipsam temporibus odit, incidunt voluptate nesciunt possimus, magni enim. Eum, amet repellendus!
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
