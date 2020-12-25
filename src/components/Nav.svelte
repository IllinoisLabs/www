<script lang="ts">
  export let segment: string;
</script>

<style>
  div.wrap {
    position: fixed;
    background: none;
    width: 100%;
    /* border-bottom: 1px solid rgba(0,0,0,0.1); */
    font-weight: 300;
    box-sizing: border-box;
    top: 0;
    z-index: 999;
    display: block;
  }
  nav {
    display: flex;
    margin: 2em auto 0;
    max-width: 1300px;
    width: 95%;
    justify-content: space-between;
    background-color: white;
    border-radius: 0.5em;
    padding: 0 2em;
    box-sizing: border-box;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    display: inline-block;
  }

  [aria-current] {
    position: relative;
    background-color: var(--blue);
    color: white;
  }
  /* 
	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: var(--blue);
		display: block;
		bottom: -1px;
	} */

  a {
    text-decoration: none;
    height: 4em;
    display: flex;
    padding: 0;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  li > a {
    padding: 2em;
  }

  li:nth-child(1) > a {
    padding-left: 0;
  }

  ul:last-child li:last-child > a {
    padding-right: 0;
  }

  /* a img {
		display: block;
		height: 64px;
	} */

  li.cta a div {
    padding: 0.5em 2em;
    background-color: var(--blue);
    color: white;
    border-radius: 2em;
  }
</style>

<div class="wrap">
  <nav>
    <ul>
      <li><a href="."><span style="font-family: 'Krona One'; color: var(--orange);">Illinois Labs</span></a></li>
      <li><a aria-current={segment === undefined ? 'page' : undefined} href=".">Home</a></li>
      <li><a aria-current={segment === 'work' ? 'page' : undefined} href="work">Work</a></li>
      <li><a aria-current={segment === 'about' ? 'page' : undefined} href="about">About</a></li>
    </ul>
    <ul>
      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
				 the blog data when we hover over the link or tap it on a touchscreen -->
      <!-- <li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li> -->
      <li class="cta">
        <a href="join"><div>Join Us</div></a>
      </li>
    </ul>
  </nav>
</div>
