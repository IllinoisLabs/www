<script lang="ts">
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
  import { exclamationTriangle, checkCircle } from 'svelte-awesome/icons';

  let emailInput: HTMLInputElement | undefined;
  let email = '';
  let emailIsValid = false;
  type status = 'inprogress' | 'success' | 'error';
  let formStatus: status = 'inprogress';

  $: {
    emailIsValid = email && emailInput !== undefined && emailInput.checkValidity();
  }

  const encode = (data) => {
    const toReturn = Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
    console.log(toReturn);
    return toReturn;
  };
  function handleSubmit(e) {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'mailing-list', email }),
    })
      .then(() => {
        formStatus = 'success';
      })
      .catch((error) => {
        formStatus = 'error';
      });
  }
</script>

<style>
  .wrap {
    display: block;
    background-color: var(--off-white);
    border-radius: 0 0 var(--br) var(--br);
    position: relative;
    padding-bottom: 7.5vh;
    margin: 15em var(--mg) 0;
  }

  .wrap::before {
    --height: 10em;

    position: absolute;
    top: calc(-1 * var(--height));
    content: '';
    display: block;
    background-color: var(--off-white);
    height: var(--height);
    width: 100%;
    clip-path: polygon(0 0, 100% 65%, 100% 100%, 0 100%);
    border-radius: var(--br) var(--br) 0 0;
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section img {
    width: 100%;
  }

  section div:nth-child(1) {
    flex: 2;
    margin-right: 4em;
  }

  section div:nth-child(2) {
    flex: 3;
  }

  @media only screen and (max-width: 885px) {
    section div:nth-child(1) {
      display: none;
    }
  }

  .contact-form {
    display: flex;
    height: 3em;
    margin-top: 0.75em;
    align-items: stretch;
    font-size: 18px;
    box-sizing: border-box;
  }

  .contact-form input,
  .contact-form button {
    font-size: 18px;
    font-weight: 600;
    font-family: var(--font-stack);
    border: none;
    outline: none;
    box-sizing: border-box;
  }

  .contact-form input {
    flex: 3;
    border-radius: var(--br) 0 0 var(--br);
    padding-left: calc(1.25em - 2px);
    color: var(--text);
    border: 2px solid white;
    border-right: none;
    margin-right: 0;
  }

  input:required {
    box-shadow: none;
  }
  input:invalid {
    box-shadow: none;
    border: 2px solid #e15285;
    border-right: none;
  }

  .contact-form button {
    flex: 1;
    margin-left: 0;
    border-radius: 0 var(--br) var(--br) 0;
    background: var(--blue);
    color: white;
    cursor: pointer;
  }

  .contact-form button:disabled {
    background: lightgrey;
    opacity: 0.4;
    color: var(--text);
    cursor: not-allowed;
  }

  .contact-form button::after {
    content: '→';
    padding-left: 0.35em;
    padding-right: 0.35em;
    transition: padding 0.2s ease-in-out;
  }

  .contact-form button:hover::after {
    padding-left: 0.7em;
    padding-right: 0;
  }

  .contact-form button:hover:disabled::after {
    padding-left: 0.35em;
    padding-right: 0.35em;
  }

  h3 {
    font-family: var(--font-stack);
    margin: 1.5em 0 0.5em;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  ul > li {
    display: inline-block;
    margin-right: 1.35em;
    font-size: 18px;
    font-family: var(--header-stack);
    font-weight: 500;
  }

  ul > li:hover {
    color: var(--blue);
  }

  ul > li > a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  ul > li > a > span {
    margin-left: 0.4em;
  }

  @media only screen and (max-width: 885px) {
    ul > li {
      display: block;
    }
  }

  #form-success {
    width: 100%;
    height: 100%;
    border-radius: var(--br);
    background-color: var(--green);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 600;
  }

  #form-error {
    margin-top: 0.5em;
    width: 100%;
    height: 100%;
    border-radius: var(--br);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: var(--red);
    font-weight: 600;
  }
</style>

<div class="wrap dark">
  <section>
    <div><img src="/contact.svg" alt="contact graphic" /></div>
    <div>
      <h2>Learn More</h2>
      <h3>Sign-up to our mailing list to keep in touch.</h3>
      <form class="contact-form" name="mailing-list" method="post" data-netlify="true" on:submit={handleSubmit}>
        <input type="hidden" name="form-name" value="mailing-list" />
        {#if formStatus === 'inprogress' || formStatus === 'error'}
          <input type="email" name="email" bind:this={emailInput} bind:value={email} placeholder="name@example.com" />
          <button disabled={!emailIsValid} type="submit">Join</button>
        {:else}
          <div id="form-success">
            <Icon data={checkCircle} scale={1.25} style="margin-right: 0.25em" />
            Successfully Submitted!
          </div>
        {/if}
      </form>
      {#if formStatus === 'error'}
        <div id="form-error">
          <Icon data={exclamationTriangle} scale={1.25} style="margin-right: 0.25em" />
          Error. Try again.
        </div>
      {/if}
      <h3>Find us elsewhere.</h3>
      <ul>
        <li>
          <a href="https://github.com/illinoislabs" target="_blank" rel="noreferrer noopener">
            <Icon data={faGithub} scale={1.5} />
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://facebook.com" target="_blank" rel="noreferrer noopener">
            <Icon data={faFacebook} scale={1.5} />
            <span>Facebook</span></a>
        </li>
        <li>
          <a href="https://linkedin.in" target="_blank" rel="noreferrer noopener">
            <Icon data={faLinkedin} scale={1.5} />
            <span>LinkedIn</span></a>
        </li>
      </ul>
    </div>
  </section>
</div>
