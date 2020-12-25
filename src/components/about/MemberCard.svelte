<script lang="ts">
  import type { member } from '../../utils/types';

  export let member: member;
</script>

<style>
  div.wrap {
    display: flex;
    flex: 1;
  }

  img {
    border-radius: 50%;
    width: 100%;
  }

  .image-wrapper {
    display: block;
    flex: 1;
  }

  .info-wrapper {
    flex: 3;
    padding-left: 1em;
  }

  h3 {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul.inline > li {
    display: inline;
  }
</style>

<div class="wrap">
  <div class="image-wrapper"><img src="https://via.placeholder.com/150" alt={member.name} /></div>
  <div class="info-wrapper">
    <h3>{member.name}</h3>
    <ul>
      <li>{member.position}</li>
      <li>
        <ul class="inline">
          {#if member.website}
            <li>WB</li>
          {/if}
          {#if member.linkedin}
            <li>LI</li>
          {/if}
          {#if member.github}
            <li>GH</li>
          {/if}
        </ul>
      </li>
    </ul>
  </div>
</div>
