<script lang="ts">
  import type { member } from '../../utils/types';

  // icons
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { globe } from 'svelte-awesome/icons';
  import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

  // props
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
    font-family: var(--font-stack);
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul > li {
    line-height: 1.75;
  }

  ul.inline > li {
    display: inline;
    margin-right: 0.15em;
  }

  ul.inline > li:hover a {
    color: var(--blue);
  }
</style>

<div class="wrap">
  <div class="image-wrapper"><img src="https://picsum.photos/150" alt={member.name} /></div>
  <div class="info-wrapper">
    <h3>{member.name}</h3>
    <ul>
      <li>{member.position}</li>
      <li>
        <ul class="inline">
          {#if member.website}
            <li>
              <a href={member.website} target="_blank" rel="noreferrer noopener">
                <Icon data={globe} />
              </a>
            </li>
          {/if}
          {#if member.linkedin}
            <li>
              <a href={member.linkedin} target="_blank" rel="noreferrer noopener">
                <Icon data={faLinkedin} />
              </a>
            </li>
          {/if}
          {#if member.github}
            <li>
              <a href={member.github} target="_blank" rel="noreferrer noopener">
                <Icon data={faGithub} />
              </a>
            </li>
          {/if}
        </ul>
      </li>
    </ul>
  </div>
</div>
