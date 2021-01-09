<script lang="ts">
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { times, bars as menu } from 'svelte-awesome/icons';

  export let segment: string;

  // current scroll position, inner height
  let y, h;
  //
  let isOpen = false;
</script>

<style>
  div.wrap {
    position: absolute;
    background: none;
    width: 100%;
    font-weight: 300;
    box-sizing: border-box;
    top: 0;
    z-index: 999;
    display: block;
    padding-top: 2em;
    transition: padding 0.25s ease-in-out;
  }

  div.wrap.scrolled {
    position: fixed;
    padding-top: 1.5em;
  }

  nav {
    display: flex;
    margin: 0 auto;
    max-width: 1300px;
    width: 95%;
    justify-content: space-between;
    background-color: var(--off-white);
    box-shadow: none;
    border-radius: 0.5em;
    padding: 0 2em;
    box-sizing: border-box;
  }

  nav.scrolled {
    background-color: white;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.014), 0 6.7px 5.3px rgba(0, 0, 0, 0.02),
      0 12.5px 10px rgba(0, 0, 0, 0.025), 0 22.3px 17.9px rgba(0, 0, 0, 0.03), 0 41.8px 33.4px rgba(0, 0, 0, 0.036),
      0 100px 80px rgba(0, 0, 0, 0.05);
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
  }

  nav.scrolled a[aria-current] {
    position: relative;
    background-color: var(--blue);
    color: white;
  }

  a[aria-current] {
    position: relative;
    background: none;
    font-weight: 600;
    color: var(--blue);
  }

  a {
    text-decoration: none;
    height: 4em;
    display: flex;
    padding: 0;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-weight: 600;
  }

  li > a {
    padding: 2em;
  }

  li:nth-child(1) > a {
    padding-left: 0;
  }

  ul:nth-child(2) li:last-child > a {
    padding: 0;
  }

  li.cta a div {
    padding: 0.25em 2em;
    background-color: var(--blue);
    color: white;
    border-radius: 2em;
  }

  /* mobile nav */

  .mobile {
    position: relative;
    display: none;
  }

  .mobile button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5em;
    width: 1.5em;
    padding: 0;
    background: var(--orange);
    border: none;
    outline: none;
    font-size: 20px;
    border-radius: 50%;
    color: white;
  }

  #mobile-menu {
    display: none;
  }

  @media only screen and (max-width: 850px) {
    .mobile {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    div.wrap {
      transition: none;
    }

    div.wrap.scrolled {
      padding: 0;
    }

    nav.scrolled {
      width: 100%;
      border-radius: 0;
    }

    #mobile-menu {
      display: block;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      min-height: 100vh;
      box-sizing: border-box;
      padding-top: 6em;
      background-color: white;
      z-index: 850;
    }

    #mobile-menu > li {
      display: block;
    }

    #mobile-menu > li a {
      justify-content: center;
    }

    nav > ul {
      display: none;
    }
    /* nav {
      background: none;
    } */

    .open-mm nav {
      background-color: white;
    }

    .open-mm nav.scrolled {
      background-color: white;
      box-shadow: none;
    }

    .open-mm div.wrap.scrolled,
    .open-mm div.wrap {
      position: fixed;
    }

    .open-mm div.wrap {
      padding-top: 2em;
    }

    .open-mm div.wrap.scrolled {
      padding-top: 0;
    }

    li > a {
      padding: 0;
    }
  }
</style>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />

<span class={isOpen ? 'open-mm' : ''}>
  <div class={y > 80 ? 'scrolled wrap' : 'wrap'}>
    <nav class={y > 80 ? 'scrolled' : ''}>
      <ul>
        <li>
          <a href="/" rel="prefetch"><span style="font-family: 'Krona One'; color: var(--orange);">Illinois Labs</span></a>
        </li>
        <!-- </ul>
    <ul> -->
        <li><a aria-current={segment === undefined ? 'page' : undefined} href="/">Home</a></li>
        <li><a aria-current={segment === 'about' ? 'page' : undefined} href="/about">About</a></li>
        <li><a aria-current={segment === 'team' ? 'page' : undefined} href="/team" rel="prefetch">Team</a></li>
        <!-- <li><a aria-current={segment === 'work' ? 'page' : undefined} href="/work">Work</a></li> -->
      </ul>
      <ul>
        <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
				 the blog data when we hover over the link or tap it on a touchscreen -->
        <!-- <li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li> -->
        <li class="cta">
          <a href="join" rel="prefetch"><div>Join Us</div></a>
        </li>
      </ul>

      <div class="mobile">
        <a href="/"><span style="font-family: 'Krona One'; color: var(--orange);">Illinois Labs</span></a>
        <button on:click={() => (isOpen = !isOpen)}>
          {#if isOpen}
            <Icon data={times} />
          {:else}
            <Icon data={menu} />
          {/if}
        </button>
      </div>
    </nav>
  </div>

  {#if isOpen}
    <ul id="mobile-menu" on:click={() => (isOpen = false)}>
      <li><a aria-current={segment === undefined ? 'page' : undefined} href="/">Home</a></li>
      <li><a aria-current={segment === 'team' ? 'page' : undefined} href="/team" rel="prefetch">Team</a></li>
      <li><a aria-current={segment === 'about' ? 'page' : undefined} href="/about">About</a></li>
      <li class="cta">
        <a href="join"><div>Join Us</div></a>
      </li>
    </ul>
  {/if}
</span>
