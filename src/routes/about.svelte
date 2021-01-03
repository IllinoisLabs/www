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
  <p>All about Illinois Labs. Who we are, what we do, and why we do it.</p>
  <h2>Our Mission</h2>
  <div class="split">
    <article>
      <p>
        We are an organization made by students, for students. As software developers and designers, it is our mission to provide tools
        and services to the UIUC student body that will benefit the community; from course review dashboards to schedule makers and everything in between.

        Most university supported software for students is made by companies whose products appeal to school administrators, and focus more on profit than student utility.
        Unmotivated by income, we can effectively meet the needs of the student body and align our products with our values as students.
      </p>

      <p>
        Our end goal is to make the college experience a little less stressful for everyone. By taking action, we are making UIUC student life a little better 
        with each project, and who doesn't want that?
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
            The needs of the student body come above all else. The projects that we develop are created to provide utility for current and future UIUC students.
          </p>
        </div>
      </li>
      <li>
        <img src="icons/opensource.svg" alt="" />
        <div>
          <h3>Open Source</h3>
          <p>
            All of our project source code is made publically available. Any and all curious students should be able to see what powers the applications we make to help them.
            Only members can contribute to our projects, though!
          </p>
        </div>
      </li>
      <li>
        <img src="icons/arrow.svg" alt="" />
        <div>
          <h3>Be Concise</h3>
          <p>
            Our projects tackle very specific needs of the community. We are concise in our project and organization-wide goals, and define culture in specific terms of the values we
            want to see from our members.
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
