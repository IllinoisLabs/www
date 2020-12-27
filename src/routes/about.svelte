<script lang="ts">
  import Header from '../components/Header.svelte';

  import MemberCard from '../components/about/MemberCard.svelte';
  import type { member } from '../utils/types';

  let members: member[] = [
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
      image: '',
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

<Header title="About" desc="What is Illinois Labs?" />
<section>
  <h2>Our Mission</h2>
  <article>
    <p>
      Illinois Labs is an organization made by students, for students. The University of Illinois has some of the most
      talented student developers in the world, and yet none of their currently registered CS based student
      organizations are dedicated to creating solutions that make students lives easier. It is our mission to provide
      tools and services to the UIUC student body that will benefit the community; from course reviews to schedule
      makers and everything in between.
    </p>

    <p>
      Our end goal is to make the UIUC experience a little less stressful for everyone. We already have amazing
      advisors, professors, and student organizations that help make UIUC special. But ultimately students
      are still stressed over meeting their degree requirements, whether or not they should take certain classes, etc.
      Since this is such a universal expereince for
      <i>all</i>
      college students, we figured it was in everyone's best interest to make tools that would resolve some of these
      issues. By taking action, we are making UIUC student life a little better with each project, and who doesn't want
      that?
    </p>
  </article>
  <h2>Our Members</h2>
  <article id="members">
    {#each members as member}
      <MemberCard {member} />
    {/each}
  </article>
</section>
