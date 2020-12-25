<script lang="ts">
  import Header from '../components/Header.svelte';

  import MemberCard from '../components/about/MemberCard.svelte';
  import type { member } from '../utils/types';

  let members: member[] = [
    {
      name: 'Siraj Chokshi',
      position: 'Software Developer',
      image: '',
      linkedin: 'https://linkedin.com/in/sirajchokshi',
    },
    {
      name: 'Davis Keene',
      position: 'Software Developer',
      image: '',
      linkedin: 'https://linkedin.com/in/sirajchokshi',
    },
    { name: 'Gene Wang', position: 'Software Developer', image: '', linkedin: 'https://linkedin.com/in/sirajchokshi' },
    {
      name: 'Neeraj Aggarwal',
      position: 'Software Developer',
      image: '',
      linkedin: 'https://linkedin.com/in/sirajchokshi',
    },
    { name: '??? ?????', position: 'Software Developer', image: '', linkedin: 'https://linkedin.com/in/sirajchokshi' },
    { name: '???? ????', position: 'Software Developer', image: '', linkedin: 'https://linkedin.com/in/sirajchokshi' },
  ];
</script>

<style>
  #members {
    margin-top: 3em;
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
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<Header title="About" desc="This is the 'about' page. There's not much here." />
<section>
  <h2>Members</h2>
  <article id="members">
    {#each members as member}
      <MemberCard {member} />
    {/each}
  </article>
</section>
