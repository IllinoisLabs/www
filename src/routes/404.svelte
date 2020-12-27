<script lang="ts">
  import ErrorPage from './_error.svelte';

  let e: any = {
    name: '404',
    message: 'Not Found',
  };
</script>

<ErrorPage status={404} error={e} />
