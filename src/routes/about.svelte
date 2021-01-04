<script lang="ts">
  import Header from '../components/Header.svelte';
</script>

<style>
  figure img {
    width: 100%;
  }

  .card-grid {
    margin-top: 3.5em;
    display: flex;
  }

  .card-grid > div {
    flex: 1;
    margin-right: calc(var(--mg) * 2);
  }

  .card-grid > div:last-child {
    margin-right: 0;
  }

  .card-grid > div {
    margin-bottom: 3em;
  }

  .card-grid div img {
    width: 5em;
  }

  .card-grid p {
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
  }

  h3 {
    font-family: var(--font-stack);
    margin: 0.25em 0 0.5em;
  }

  @media only screen and (max-width: 850px) {
    .card-grid {
      display: flex;
      flex-flow: column;
    }

    .card-grid > div {
      flex: 1;
    }

    .card-grid > div:first-child {
      flex: 1;
      margin-right: 0;
      margin-bottom: 3.25em;
    }

    .card-grid > div:last-child {
      margin-left: 0;
    }

    .card-grid > div {
      margin-bottom: 2em;
      clear: both;
    }

    .card-grid > div > img {
      float: left;
      padding-bottom: 3em;
      margin-right: 1.25em;
    }

    .card-grid div img {
      width: 5em;
    }

    .card-grid p {
      font-size: 14px;
      line-height: 1.5;
      margin: 0;
    }

    h3 {
      font-size: 18px;
    }
  }

  .split {
    display: flex;
    margin-bottom: 2.5em;
  }

  .split > * {
    flex: 2;
  }

  .split > figure {
    flex: 1;
  }

  @media only screen and (max-width: 760px) {
    .split {
      flex-flow: column;
    }

    .split figure {
      max-width: 20em;
      margin: 1em auto 2em;
    }
  }

  /* #values {
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
  } */
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<Header title="About" desc="We are an organization made by students, for students." graphicSrc="/app.svg" />

<section class="center">
  <h2>Guiding Values</h2>
  <p>
    Our organization and practices surround our values. We try to find and execute these ideas in problems we solve.
  </p>
  <article class="card-grid">
    <div>
      <img src="icons/people.svg" alt="" />
      <h3>Students-First</h3>
      <p>
        The needs of the student body come above all else. The projects that we develop are created to provide utility
        for current and future students.
      </p>
    </div>
    <div>
      <img src="icons/opensource.svg" alt="" />
      <h3>Open Source</h3>
      <p>
        All of our project source code is made publically available. Any and all students should be able to see what
        powers the applications we make to help them and be able to address all concerns.
      </p>
    </div>
    <div>
      <img src="icons/arrow.svg" alt="" />
      <h3>Be Concise</h3>
      <p>
        Projects tackle the specific needs of our community. We are clear and transparent in our projects,
        organizational goals, and want to see these values in our members.
      </p>
    </div>
  </article>
</section>

<section class="center">
  <h2>Our Mission</h2>
  <div class="split">
    <article>
      <p>
        As software developers and designers, it is our mission to provide tools and services to the UIUC student body
        that will benefit the community; from course review dashboards to schedule makers and everything in between.
        Most university supported software for students is made by companies whose products appeal to school
        administrators, and focus more on profit than student utility. Unmotivated by income, we can effectively meet
        the needs of the student body and align our products with our values as students.
      </p>

      <p>
        Our end goal is to make the college experience a little less stressful for everyone. By taking action, we are
        making UIUC student life a little better with each project, and who doesn't want that?
      </p>
    </article>
    <figure><img src="/draguser.svg" alt="" /></figure>
  </div>
</section>

<!-- <section>
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
            The needs of the student body come above all else. The projects that we develop are created to provide
            utility for current and future students.
          </p>
        </div>
      </li>
      <li>
        <img src="icons/opensource.svg" alt="" />
        <div>
          <h3>Open Source</h3>
          <p>
            All of our project source code is made publically available. Any and all students should be able to see what
            powers the applications we make to help them and be able to address all concerns.
          </p>
        </div>
      </li>
      <li>
        <img src="icons/arrow.svg" alt="" />
        <div>
          <h3>Be Concise</h3>
          <p>
            Projects tackle the specific needs of our community. We are clear and transparent in our projects,
            organizational goals, and want to see these values in our members.
          </p>
        </div>
      </li>
    </ul>
  </article>
</section> -->

<section class="center">
  <h2>Our Team</h2>
  <p>Our mission and values are held and made possible by our team of student developers.</p>
  <div class="button-wrapper"><a href="/team" class="button" rel="prefetch">Check Out Our Team</a></div>
</section>
