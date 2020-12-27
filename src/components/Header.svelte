<script lang="ts">
  export let title: string;
  export let desc: string;
</script>

<style>
  .wrap {
    padding: 7.5em 0 1em;
    margin: var(--mg) 0;
    border-radius: var(--br);
  }

  h1 {
    margin-bottom: 0;
    color: var(--dark);
  }

  p {
    margin: 0.5em 0 0;
  }

  /* @media only screen and (max-width: 1100px) {
    section {
      padding-left: 1.5em;
    }
  } */
</style>

<div class="wrap">
  <section>
    <h1>{title}</h1>
    <!-- {#if desc}
      <p>{desc}</p>
    {/if} -->
  </section>
</div>
