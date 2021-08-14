<script lang="ts">
  export let title: string;
  export let desc: string | undefined = undefined;
  export let graphicSrc: string | undefined = undefined;
  export let width: number | undefined = undefined;
</script>

<style>
  .wrap {
    padding: 7.5em 0 1em;
    margin: var(--mg) 0;
    border-radius: var(--br);
  }

  .desc h1 {
    font-size: 1em;
  }
  h1 {
    margin-bottom: 0.5em;
    color: var(--orange);
  }

  p.headline {
    margin: 0;
    font-size: 32px;
    color: var(--dark);
    line-height: 1.2;
    font-weight: 600;
  }

  section {
    display: flex;
    align-items: center;
    min-height: 50vh;
  }

  section > * {
    flex: 1;
    align-items: center;
  }

  figure {
    display: flex;
    justify-content: flex-end;
    margin: 0;
  }

  figure > img {
    width: 100%;
    user-select: none;
  }

  @media only screen and (max-width: 760px) {
    section {
      flex-flow: column;
      min-height: 0;
    }

    section figure {
      max-width: 20em;
      margin: 2.5em 0;
    }

    p.headline {
      font-size: 24px;
    }
  }
</style>

{#if desc && graphicSrc}
  <div class="wrap">
    <section>
      <div class="desc" style={width ? `max-width: ${width}px` : ''}>
        <h1>{title}</h1>
        {#if desc}
          <p class="headline">{desc}</p>
        {/if}
      </div>
      <figure><img src={graphicSrc} alt="" /></figure>
    </section>
  </div>
{:else}
  <div class="wrap" style="padding-bottom: 0">
    <section style="min-height: 0">
      <h1 style="margin-bottom: 0; text-align: center;">{title}</h1>
    </section>
  </div>
{/if}
