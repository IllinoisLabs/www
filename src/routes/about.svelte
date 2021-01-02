<script lang="ts">
  import Header from '../components/Header.svelte';
</script>

<style>
  #members {
    margin-top: 2em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 1.25em;
  }

  @media only screen and (max-width: 885px) {
    #members {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media only screen and (max-width: 480px) {
    #members {
      grid-template-columns: 1fr;
    }
  }

  figure img {
    width: 100%;
  }

  article {
    margin-bottom: 2.5em;
  }

  a:hover {
    color: var(--blue);
  }

  .split {
    display: flex;
  }

  .split > * {
    flex: 2;
  }

  .split > figure {
    flex: 1;
  }

  #values {
    list-style: none;
    padding: 0;
    margin: 1.5em 0 2.5em;
  }

  #values li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.5em;
  }

  #values li > * > h3 {
    font-family: var(--font-stack);
  }

  #values li > * > p {
    margin: 0;
  }

  #values li img {
    width: 5em;
    margin-right: var(--mg);
  }

  #values li img ~ * {
    display: block;
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<Header title="About" desc="What is Illinois Labs?" />
<section>
  <h2>Our Mission</h2>
  <div class="split">
    <article>
      <p>
        Illinois Labs is an organization made by students, for students. The University of Illinois has some of the most
        talented student developers in the world, and yet none of their currently registered CS based student
        organizations are dedicated to creating solutions that make students lives easier. It is our mission to provide
        tools and services to the UIUC student body that will benefit the community; from course reviews to schedule
        makers and everything in between.
      </p>

      <p>
        Our end goal is to make the UIUC experience a little less stressful for everyone. We already have amazing
        advisors, professors, and student organizations that help make UIUC special. But ultimately students are still
        stressed over meeting their degree requirements, whether or not they should take certain classes, etc. Since
        this is such a universal expereince for
        <i>all</i>
        college students, we figured it was in everyone's best interest to make tools that would resolve some of these
        issues. By taking action, we are making UIUC student life a little better with each project, and who doesn't
        want that?
      </p>
    </article>
    <figure><img src="/draguser.svg" alt="" /></figure>
  </div>
</section>

<section>
  <h2>Guiding Values</h2>
  <article>
    <p>
      Our organization and practices surround our values. This system is still in its infancy, but the current building
      blocks of our values can be seen below.
    </p>
    <ul id="values">
      <li>
        <img src="icons/people.svg" alt="" />
        <div>
          <h3>Students-First</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vel magnam cum, perspiciatis ab voluptates
            inventore illo earum aperiam, laboriosam quos eum illum recusandae ea voluptatem adipisci nihil porro id.
          </p>
        </div>
      </li>
      <li>
        <img src="icons/opensource.svg" alt="" />
        <div>
          <h3>Open Source</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vel magnam cum, perspiciatis ab voluptates
            inventore illo earum aperiam, laboriosam quos eum illum recusandae ea voluptatem adipisci nihil porro id.
          </p>
        </div>
      </li>
      <li>
        <img src="icons/arrow.svg" alt="" />
        <div>
          <h3>Be Concise</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vel magnam cum, perspiciatis ab voluptates
            inventore illo earum aperiam, laboriosam quos eum illum recusandae ea voluptatem adipisci nihil porro id.
          </p>
        </div>
      </li>
    </ul>
  </article>
</section>

<section>
  <h2>Our Team</h2>
  <article>
    <p>Check out our team of developers <a href="/team" rel="prefetch">here</a>.</p>
  </article>
</section>
