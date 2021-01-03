<script lang="ts">
  import type { FormBlock } from '../utils/types';
  import { FormGuards } from '../utils/guards';

  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { upload } from 'svelte-awesome/icons';
  import About from '../routes/about.svelte';

  export let formData: { formLabel: string; formName: string; formDesc: string; blocks: FormBlock[] };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };
  function handleSubmit(e) {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ [formData.formName]: 'contact', ...formData }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));
  }

  let formValues;

  function getFormValues(data: FormBlock[]) {
    return data.map((e) => ({ [e.name]: '' })).reduce((e, s) => Object.assign(e, s, {}));
  }

  $: formValues = getFormValues(formData.blocks);
  $: console.log(formValues);
</script>

<style>
  .wrap {
    display: block;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 30px;
    background-color: #00000008;
    border-radius: 0.5em;
  }

  h2 {
    padding: 1em 0 0;
  }

  p {
    margin-bottom: 2em;
  }

  form {
    width: 100%;
    margin: 0 auto;
    max-width: 800px;
  }

  form p {
    margin: -0.5em 0 0.5em;
  }

  .form-block {
    margin: 0 0 1.5em;
  }

  label {
    display: block;
    font-size: 16px;
    margin: 1em 0 0.25em;
    user-select: none;
    font-weight: 700;
    opacity: 0.8;
  }
  label ~ p {
    font-size: 16px;
    opacity: 0.95;
    margin-bottom: 0;
  }

  label.header {
    opacity: 1;
  }

  input:not([type='radio']):not([type='checkbox']),
  textarea,
  label.fake-upload {
    display: block;
    height: 3em;
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    font-family: var(--font-stack);
    outline: none;
    box-sizing: border-box;
    border-radius: 0.5em;
    padding: 0 1.25em;
    border: 2px solid #04163350;
    color: var(--text);
  }

  label.fake-upload {
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: var(--blue);
    color: white;
    border-color: var(--blue);
    margin: 0.5em 0;
    opacity: 1;
  }

  textarea {
    padding: 1.25em;
    min-height: 3em;
    height: auto;
  }

  label.required::after {
    content: '*';
    margin-left: 2px;
    color: var(--red);
  }

  input:invalid {
    box-shadow: none;
    outline: none;
  }

  input:placeholder-shown {
    border-color: #04163350 !important;
  }

  input:not(:placeholder-shown):invalid {
    border-color: var(--red) !important;
  }

  input:focus,
  textarea:focus {
    border-color: var(--blue) !important;
  }

  input:not(:placeholder-shown):valid,
  textarea:not(:placeholder-shown) {
    box-shadow: none;
    border-color: var(--green) !important;
  }

  label.inline-other input:not([type='radio']):not([type='checkbox']) {
    display: inline-block;
    border: none;
    background-color: var(--text);
  }

  input[type='file'] {
    display: none !important;
  }

  /* input:focus {
    border-color: var(--blue) !important;
  } */

  button[type='submit'] {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 9em;
    height: 3em;
    font-size: 16px;
    border-radius: 0.5em;
    background-color: var(--blue);
    font-family: var(--font-stack);
    color: white;
    margin-top: 1.5em;
    font-weight: 700;
    border: none;
    cursor: pointer;
  }
</style>

<div class="wrap">
  <h2>{formData.formLabel}</h2>

  {#if formData.formDesc}
    <p>{formData.formDesc}</p>
  {/if}

  <form on:submit={handleSubmit} action="POST" name="contact" data-netlify="true">
    <input type="hidden" name={formData.formName} value={formData.formName} />
    {#each formData.blocks as block}
      <div class="form-block">
        <label class={`header ${block.required ? 'required' : ''}`} for={block.name}>{block.label}</label>
        {#if block.desc}
          <p>{block.desc}</p>
        {/if}
        {#if FormGuards.isFormBlockInput(block)}
          <input
            name={block.name}
            id={block.name}
            placeholder={block.placeholder}
            type={block.type ? block.type : 'text'}
            required={block.required} /><span />
        {:else if FormGuards.isFormBlockSelect(block)}
          {#each block.options as option}
            <input
              type={block.allowMultiple ? 'checkbox' : 'radio'}
              name={block.name}
              id={block.name + option}
              required={block.allowMultiple ? false : block.required}
              value={option} />
            <label style="display: inline; margin-left: 0.5em;" for={block.name + option}>{option}</label>
            <br />
          {/each}
        {:else if FormGuards.isFormBlockTextArea(block)}
          <textarea name={block.name} placeholder={' '} id={block.name} cols="30" rows={block.rows} />
        {:else if FormGuards.isFromBlockUpload(block)}
          <input
            type="file"
            name={block.name}
            id={block.name}
            accept={block.acceptableTypes !== null ? block.acceptableTypes.join(', ') : undefined} />
          <label for={block.name} class="fake-upload"><Icon data={upload} style="margin-right: 0.5em" />
            Upload File</label>
        {/if}
      </div>
    {/each}

    <button type="submit">Submit</button>
  </form>
</div>
