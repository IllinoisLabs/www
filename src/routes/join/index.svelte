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

  article {
    margin-bottom: 2.5em;
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

  .card-grid {
    margin: 3.5em auto 0;
    display: flex;
    max-width: 760px;
  }

  .card-grid > div {
    flex: 1;
    margin-right: calc(var(--mg) * 2);
  }

  .card-grid > div:last-child {
    margin-right: 0;
  }

  .card-grid > div {
    margin-bottom: 3em;
  }

  .card-grid div img {
    width: 5em;
  }

  .card-grid p {
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
  }

  .card-grid .button-wrapper {
    margin-top: 1.5em;
  }

  h3 {
    font-family: var(--font-stack);
    margin: 0.25em 0 0.5em;
  }

  @media only screen and (max-width: 850px) {
    .card-grid {
      display: flex;
      flex-flow: column;
    }

    .card-grid > div {
      flex: 1;
    }

    .card-grid > div:first-child {
      flex: 1;
      margin-right: 0;
      margin-bottom: 3.25em;
    }

    .card-grid > div:last-child {
      margin-left: 0;
    }

    .card-grid > div {
      margin-bottom: 2em;
      clear: both;
    }

    .card-grid > div > img {
      float: left;
      padding-bottom: 3em;
      margin-right: 1.25em;
    }

    .card-grid div img {
      width: 5em;
    }

    .card-grid p {
      font-size: 14px;
      line-height: 1.5;
      margin: 0;
    }

    h3 {
      font-size: 18px;
    }
  }
</style>

<svelte:head>
  <title>Join Us | Illinois Labs</title>
</svelte:head>

<Header
  title="Join Us"
  desc="Interested in joining a team of engineers and product-owners building tools for our community? Apply Below."
  graphicSrc="/joinus.svg" />
<section class="center" style="margin-bottom: 2.5em;">
  <h2>Who We're Looking For</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut distinctio ad illo dignissimos voluptatem
    temporibus. In, voluptatibus eum quia, accusantium atque, natus minus placeat rem magni commodi reiciendis repellat!
  </p>
</section>
<section class="center">
  <h2>Open Positions</h2>
  <article class="card-grid">
    <div>
      <img src="icons/software.svg" alt="" />
      <h3>Software Developer</h3>
      <p>
        The needs of the student body come above all else. The projects that we develop are created to provide utility
        for current and future students.
      </p>
      <div class="button-wrapper"><a href="/join/software" class="button">Apply</a></div>
    </div>
    <div>
      <img src="icons/sitemap.svg" alt="" />
      <h3>UI/UX Designer</h3>
      <p>
        Projects tackle the specific needs of our community. We are clear and transparent in our projects,
        organizational goals, and want to see these values in our members.
      </p>
      <div class="button-wrapper"><a href="/join/design" class="button">Apply</a></div>
    </div>
  </article>
</section>
