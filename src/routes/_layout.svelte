<script lang="ts">
  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';

  export let segment: string;
</script>

<style>
  main {
    position: relative;
    width: 100%;
    min-height: calc(100vh - 10em);
    background-color: white;
    margin: 0 auto;
    padding: 0 0;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>

<Footer />
