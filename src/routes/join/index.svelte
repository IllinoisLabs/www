<script lang="ts">
  import Header from '../../components/Header.svelte';

  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { cog, sitemap } from 'svelte-awesome/icons';

  const RECRUITING = false;
</script>

<style>
  h3 {
    font-family: var(--font-stack);
  }

  article {
    margin-bottom: 2.5em;
  }

  .card-grid {
    margin: 3.5em auto 0;
    display: flex;
    max-width: 660px;
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
<section class="center">
  <h2>Open Positions</h2>
  <article style="display: flex; justify-content: center; align-items: center; min-height: 20vh">
    <p style="font-weight: 600; font-size: 24px; text-align:center; line-height: 1.5;">
      Applications are accepted at the begining of each semester.<br />We hope to see you early Fall 2021!
    </p>
  </article>
  <h2>All Positions</h2>
  <article class="card-grid">
    <div>
      <img src="icons/software.svg" alt="" />
      <h3>Software Developer</h3>
      <p>Engineer ideas that bring product to life. Work with the end-to-end tech that powers our applications.</p>
      <div class="button-wrapper"><a href="/join/software" class="button disabled">Apply</a></div>
    </div>
    <div>
      <img src="icons/sitemap.svg" alt="" />
      <h3>UI/UX Designer</h3>
      <p>Design the look and feel of products by working with prototyping tools and conducting user research.</p>
      <div class="button-wrapper"><a href="/join/design" class="button disabled">Apply</a></div>
    </div>
  </article>
</section>
