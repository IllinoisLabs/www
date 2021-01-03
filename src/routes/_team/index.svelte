<script context="module" lang="ts">
  import Header from '../../components/Header.svelte';

  import MemberCard from '../../components/about/MemberCard.svelte';
  import type { Member } from '../../utils/types';

  let members: Member[] = [
    {
      name: 'Siraj Chokshi',
      position: 'Project Lead',
      image: '',
      website: 'https://sirajchokshi.com',
      linkedin: 'https://linkedin.com/in/sirajchokshi',
      github: 'https://github.com/sirajchokshi',
    },
    {
      name: 'Davis Keene',
      position: 'Project Lead',
      image: '/headshots/davis.jpg',
      website: 'https://daviskeene.com',
      linkedin: 'https://linkedin.com/in/daviskeene',
      github: 'https://github.com/daviskeene',
    },
    {
      name: 'Gene Wang',
      position: 'Software Developer',
      image: '',
      linkedin: 'https://linkedin.com/in/neeraj-aggarwal',
      github: 'https://github.com/n3a9',
    },
    {
      name: 'Neeraj Aggarwal',
      position: 'Software Developer',
      image: '',
      website: 'https://neeraj.lol',
      linkedin: 'https://linkedin.com/in/neeraj-aggarwal',
      github: 'https://github.com/n3a9',
    },
    {
      name: '??? ?????',
      position: 'Software Developer',
      image: '',
      linkedin: 'https://linkedin.com/in/sirajchokshi',
    },
    {
      name: '???? ????',
      position: 'Software Developer',
      image: '',
      linkedin: 'https://linkedin.com/in/sirajchokshi',
    },
  ];
</script>

<style>
  #members {
    margin-top: 2em;
    display: grid;
    grid-template-columns: 2fr 2fr;
    row-gap: 2em;
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
</style>

<svelte:head>
  <title>Team | Illinois Labs</title>
</svelte:head>

<Header title="Team" />

<div class="wrap">
  <section>
    <div>
      <p>Meet our amazing team of developers and designers! Click on a users profile to read more about them.</p>
    </div>
  </section>

  <section>
    <article id="members">
      {#each members as member}
        <MemberCard {member} />
      {/each}
    </article>
  </section>
</div>
