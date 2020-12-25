<script lang="ts">
  export let title: string;
  export let desc: string;
</script>

<style>
  .wrap {
    background-color: var(--off-white);
    padding: 8em 0 2.5em;
    margin: 0.75em;
    border-radius: var(--br);
  }

  h1 {
    margin-bottom: 0;
  }

  p {
    margin: 0.5em 0 0;
  }
</style>

<div class="wrap">
  <section>
    <h1>{title}</h1>
    {#if desc}
      <p>{desc}</p>
    {/if}
  </section>
</div>
