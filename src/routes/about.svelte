<script lang="ts">
  import Header from '../components/Header.svelte';

  import MemberCard from '../components/about/MemberCard.svelte';
  import type { member } from '../utils/types';

  let members: member[] = [
    {
      name: 'Siraj Chokshi',
      position: 'Software Developer',
      image: '',
      website: 'https://sirajchokshi.com',
      linkedin: 'https://linkedin.com/in/sirajchokshi',
      github: 'https://github.com/sirajchokshi',
    },
    {
      name: 'Davis Keene',
      position: 'Software Developer',
      image: '',
      website: 'https://daviskeene.com',
      linkedin: 'https://linkedin.com/in/sirajchokshi',
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
    { name: '??? ?????', position: 'Software Developer', image: '', linkedin: 'https://linkedin.com/in/sirajchokshi' },
    { name: '???? ????', position: 'Software Developer', image: '', linkedin: 'https://linkedin.com/in/sirajchokshi' },
  ];
</script>

<style>
  #members {
    margin-top: 2em;
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
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<Header title="About" desc="This is the 'about' page. There's not much here." />
<section>
  <h2>Our Mission</h2>
  <article>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum laborum dolor voluptatem, ipsa sed aut,
      laudantium ab ut quos adipisci consequatur quisquam necessitatibus iste molestias cumque natus eos vero. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum laborum dolor voluptatem, ipsa sed aut,
      laudantium ab ut quos adipisci consequatur quisquam necessitatibus iste molestias cumque natus eos vero. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum laborum dolor voluptatem, ipsa sed aut.
    </p>
  </article>
  <h2>Our Members</h2>
  <article id="members">
    {#each members as member}
      <MemberCard {member} />
    {/each}
  </article>
</section>
