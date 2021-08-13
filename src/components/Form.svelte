<script lang="ts">
  import type { FormType } from '../utils/types';
  import { FormGuards } from '../utils/guards';

  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { upload, exclamationTriangle, checkCircle, timesCircle, spinner, paperPlane } from 'svelte-awesome/icons';

  export let formData: FormType;

  const { blocks } = formData;

  type status = 'inprogress' | 'success' | 'error';

  let formValues = {},
    formStatus: status = 'inprogress',
    loading: boolean = false;

  const encode = (data) => {
    const toReturn = Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
    return toReturn;
  };
  function handleSubmit(e) {
    e.preventDefault();
    loading = true;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': formData.formName, ...formValues }),
    })
      .then(() => {
        formStatus = 'success';
        loading = false;
      })
      .catch((error) => {
        formStatus = 'error';
        loading = false;
      });
  }

  function handleTextInput(e) {
    if (e?.target?.name && (e?.target?.value || e?.target?.value === '')) {
      formValues[e.target.name] = e.target.value;
      if (e?.target?.value === '') {
        delete formValues[e.target.name];
      }
    }
  }

  function handleSelectInput(e) {
    handleTextInput(e);
  }

  function handleMultiSelectInput(e) {
    if (e?.target?.name && e?.target?.value && e?.target?.checked !== undefined) {
      if (formValues[e.target.name] !== undefined) {
        const idx = formValues[e.target.name].indexOf(e.target.value);
        if (e.target.checked === true) {
          if (idx < 0) {
            formValues[e.target.name].push(e.target.value);
          }
        } else {
          if (idx > -1) {
            formValues[e.target.name].splice(idx, 1);
            if (formValues[e.target.name].length === 0) {
              delete formValues[e.target.name];
            }
          }
        }
      } else {
        formValues[e.target.name] = [];
        if (e.target.checked) {
          formValues[e.target.name].push(e.target.value);
        }
      }
    }
  }

  function handleFileInput(e) {
    if (e?.target?.name && e?.target?.files) {
      const fileName = e.target.files[0];
      const tempUploadName = e.target.name;
      // save data url
      // let reader = new FileReader();
      // reader.readAsDataURL(fileName);
      // reader.onload = (e) => {
      //   formValues[tempUploadName] = e.target.result;
      // };
      formValues[tempUploadName] = fileName;
    }
  }
</script>

<style>
  .outer-wrap {
    margin-top: 7.5vh;
    background-color: #00000005;
    padding-top: 3vh;
  }

  .wrap {
    display: block;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 30px 7.5vh;
    border-radius: 0.5em;
    max-width: 1000px;
  }

  h2 {
    padding: 3.5vh 0;
    text-align: center;
  }

  p {
    margin-bottom: 2em;
  }

  form {
    width: 100%;
    margin: 0 auto;
    max-width: 600px;
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
    opacity: 0.8;
    margin-bottom: 0;
  }

  input:not([type='text']):not([type='email']):not([type='url']),
  input + label {
    cursor: pointer;
  }

  label.header {
    opacity: 1;
  }

  input:not([type='radio']):not([type='checkbox']),
  textarea,
  label .fake-upload {
    display: block;
    height: 3em;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    font-family: var(--font-stack);
    outline: none;
    box-sizing: border-box;
    border-radius: 0.5em;
    padding: 0 1.25em;
    border: 2px solid #04163350;
    color: var(--text);
  }

  input[type='file'] ~ label {
    margin-top: 0.5em;
    width: auto;
    display: inline-block;
  }

  label .fake-upload {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    font-weight: 700;
    background-color: var(--blue);
    color: white;
    border-color: var(--blue);
    margin: 0 0.5em 0.5em 0;
    opacity: 1;
    width: auto;
    font-size: 14px;
    padding: 0 1em;
  }

  label .fake-upload ~ span {
    display: inline-flex;
    align-items: center;
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

  input[type='file'] {
    display: none !important;
  }
  /* 
  input[type='file'] ~ label .fake-upload {
    display: inline;
  } */

  /* input:focus {
    border-color: var(--blue) !important;
  } */

  button[type='submit'] {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 9em;
    height: 3em;
    font-size: 16px;
    border-radius: 0.5em;
    background-color: var(--blue);
    font-family: var(--font-stack);
    color: white;
    margin-right: 1em;
    margin-top: 1.5em;
    font-weight: 700;
    border: none;
    cursor: pointer;
  }

  button[type='submit'] + p {
    opacity: 1;
    height: 3em;
    margin: 0;
    display: inline-flex;
    color: var(--red);
    font-weight: 700;
    align-items: center;
  }

  .success {
    display: block;
    margin: 0 auto;
  }

  .success p:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .success > p:first-child {
    color: var(--green);
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 0;
    opacity: 1;
  }

  .success p:nth-child(2) {
    margin-top: 0;
    text-align: center;
    width: 100%;
    display: block;
    font-size: 18px;
    font-weight: 700;
    opacity: 1;
  }
</style>

<div class="outer-wrap">
  <div class="wrap">
    {#if formData.isOpen}
      <h2>{formData.formLabel}</h2>

      {#if formData.formDesc}
        <p>{formData.formDesc}</p>
      {/if}

      {#if formStatus !== 'success'}
        <form on:submit={handleSubmit} method="post" name={formData.formName} data-netlify="true">
          <input type="hidden" name="form-name" value={formData.formName} />
          {#each blocks as block}
            <div class="form-block">
              <label class={`header ${block.required ? 'required' : ''}`} for={block.name}>{block.label}</label>
              {#if block.desc}
                <p
                  style="font-weight: 400; font-size: 1em; line-height: 1.5; margin-bottom: 0.5em; margin-top: 0.175em">
                  {block.desc}
                </p>
              {/if}
              {#if FormGuards.isFormBlockInput(block)}
                {#if block.type && block.type == 'email'}
                  <input
                    name={block.name}
                    id={block.name}
                    on:input={handleTextInput}
                    placeholder={block.placeholder}
                    type="email"
                    required={block.required} /><span />
                {:else if block.type && block.type == 'url'}
                  <input
                    name={block.name}
                    id={block.name}
                    on:input={handleTextInput}
                    placeholder={block.placeholder}
                    type="url"
                    required={block.required} /><span />
                {:else}
                  <input
                    name={block.name}
                    id={block.name}
                    on:input={handleTextInput}
                    placeholder={block.placeholder}
                    type="text"
                    required={block.required} /><span />
                {/if}
              {:else if FormGuards.isFormBlockSelect(block)}
                {#each block.options as option}
                  <input
                    type={block.allowMultiple ? 'checkbox' : 'radio'}
                    name={block.name}
                    id={block.name + option}
                    required={block.allowMultiple ? false : block.required}
                    value={option}
                    on:change={block.allowMultiple ? handleMultiSelectInput : handleSelectInput} /><label
                    style="display: inline-block; padding-left: 0.5em; margin: 0;"
                    for={block.name + option}>{option}</label>
                  <br />
                {/each}
              {:else if FormGuards.isFormBlockTextArea(block)}
                <textarea
                  name={block.name}
                  placeholder={' '}
                  on:input={handleTextInput}
                  id={block.name}
                  cols="30"
                  rows={block.rows} />
              {:else if FormGuards.isFromBlockUpload(block)}
                <input
                  type="file"
                  name={block.name}
                  id={block.name}
                  on:change={handleFileInput}
                  bind:value={block.value}
                  required={block.required}
                  accept={block.acceptableTypes !== null ? block.acceptableTypes.join(', ') : undefined} />
                <label for={block.name} style="opacity: 1">
                  <div class="fake-upload">
                    <Icon data={upload} style="margin-right: 0.5em" />
                    Upload File
                  </div>
                  <span>{block.value ? block.value.split('\\').pop() : ''}</span></label>
              {/if}
            </div>
          {/each}
          <div>
            <button type="submit" disabled={loading}>
              <Icon
                data={loading ? spinner : paperPlane}
                spin={loading}
                style="margin-right: 0.75em; margin-left: -0.5em" />
              Submit
            </button>
            {#if formStatus === 'error'}
              <p>
                <Icon data={exclamationTriangle} style="margin-right: 0.5em" />
                <span>Error in submission. Try again.</span>
              </p>
            {/if}
          </div>
        </form>
      {:else if formStatus === 'success'}
        <div class="success">
          <p>
            <Icon data={checkCircle} scale={2.5} style="margin-right: 0.25em" />
            Succesfully Submitted!
          </p>
          <p>We hope to get back to you soon.</p>
        </div>
      {/if}
    {:else}
      <div class="success">
        <p style="color: grey">
          <Icon data={timesCircle} scale={2.5} style="margin-right: 0.25em" />
          No Longer Accepting Submissions.
        </p>
        <p>Recruitment is at the beginning of each semester.<br />We hope to see you early Spring 2022!</p>
      </div>
    {/if}
  </div>
</div>
