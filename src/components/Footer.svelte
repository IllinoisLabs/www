<script lang="ts">
  const year: number = new Date().getFullYear();
</script>

<style>
  /* .wrap {
    background-color: var(--off-white);
  } */

  #logo {
    font-family: var(--header-stack);
  }

  #logo + p {
    margin: 0;
  }

  footer {
    display: block;
    max-width: 1300px;
    margin: 2em auto;
    width: 95%;
    padding: 0 2em;
    border-radius: 0.5em;
    box-sizing: border-box;
  }
</style>

<div class="wrap">
  <footer>
    <!-- <div id="logo">Illinois Labs</div> -->
    <p>&copy; {year} Illinois Labs. Contact us at <a href="mailto:hello@ilinoislabs.org">hello@illinoislabs.org</a></p>
  </footer>
</div>
