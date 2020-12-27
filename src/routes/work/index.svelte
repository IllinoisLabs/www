<script context="module" lang="ts">
  import Header from '../../components/Header.svelte';
  import type { post } from '../../utils/types';

  export function preload() {
    return this.fetch(`blog.json`)
      .then((r: { json: () => any }) => r.json())
      .then((posts: post[]) => {
        return { posts };
      });
  }
</script>

<script lang="ts">
  export let posts: { slug: string; title: string; html: any }[];
</script>

<style>
  /* .wrap {
    margin: var(--mg);
  } */

  article {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5em;
  }

  article > * {
    flex: 1;
  }

  article .info {
    margin-left: 0;
    margin-right: 3em;
  }

  article:nth-child(2n) {
    flex-flow: row-reverse;
  }

  article:nth-child(2n) .info {
    margin-left: 3em;
    margin-right: 0;
  }

  article .img-wrap img {
    width: 100%;
    border-radius: 1.25em;
  }

  @media only screen and (max-width: 885px) {
    article {
      flex-flow: column-reverse;
      margin-bottom: 3em;
    }

    article .info {
      margin-left: 0;
      margin-right: 0;
      margin-top: 1em;
    }

    article:nth-child(2n) {
      flex-flow: column-reverse;
    }

    article:nth-child(2n) .info {
      margin-left: 0;
      margin-right: 0;
    }
  }
</style>

<svelte:head>
  <title>Work | Illinois Labs</title>
</svelte:head>

<Header title="Work" />
<div class="wrap">
  <section>
    {#each posts as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
      <article>
        <div class="info">
          <h2>{post.title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam at deleniti possimus voluptatem accusantium
            nostrum asperiores.
          </p>
          <a rel="prefetch" href="work/{post.slug}" class="button">View This Project</a>
        </div>
        <div class="img-wrap"><img src="https://picsum.photos/500/300" alt="" /></div>
      </article>
    {/each}
  </section>
</div>
