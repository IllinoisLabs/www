<script lang="ts">
  export let title: string;
  export let desc: string;
  export let graphicSrc: string;
</script>

<style>
  .wrap {
    padding: 7.5em 0 1em;
    margin: var(--mg) 0;
    border-radius: var(--br);
  }

  h1 {
    font-size: 1em;
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
  }

  /* @media only screen and (max-width: 1100px) {
    section {
      padding-left: 1.5em;
    }
  } */
</style>

<div class="wrap">
  <section>
    <div class="desc">
      <h1>{title}</h1>
      {#if desc}
        <p class="headline">{desc}</p>
      {/if}
    </div>
    <figure><img src={graphicSrc} alt="" /></figure>
  </section>
</div>
