<script lang="ts">
  export let status: number;
  export let error: Error;

  const dev = process.env.NODE_ENV === 'development';
</script>

<style>
  h1,
  p {
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
  }

  .wrap {
    height: calc(100vh - 7em);
    margin: var(--mg);
    border-radius: var(--br);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background-color: var(--off-white);

    background-image: url('/hero.svg');
    background-position: bottom -90px left;
    background-repeat: repeat-x;

    padding: 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<div class="wrap">
  <div>
    <h1>{status}</h1>

    <p>{error.message}</p>

    {#if dev && error.stack}
      <pre>{error.stack}</pre>
    {/if}

    <a href="/">Back to Home &rarr;</a>
  </div>
</div>
