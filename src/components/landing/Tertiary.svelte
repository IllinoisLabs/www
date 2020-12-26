<style>
  .wrap {
    display: block;
    background-color: var(--dark);
    border-radius: 0;
    position: relative;
    padding-bottom: 2em;
    margin: 15em var(--mg) 7.5em;
    color: #ffffff99;
  }

  .wrap::after {
    --height: 10em;

    position: absolute;
    bottom: calc(-1 * var(--height));
    content: '';
    display: block;
    background-color: var(--dark);
    height: var(--height);
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 35%);
    border-radius: 0 0 var(--br) var(--br);
  }

  .wrap::before {
    --height: 10em;

    position: absolute;
    top: calc(-1 * var(--height));
    content: '';
    display: block;
    background-color: var(--dark);
    height: var(--height);
    width: 100%;
    clip-path: polygon(0 35%, 100% 0, 100% 100%, 0 100%);
    border-radius: var(--br) var(--br) 0 0;
  }
</style>

<div class="wrap dark">
  <section>
    <h2>About</h2>
    <p>
      Illinois Labs is an organization made by students, for students. The University of Illinois has some of the most
      talented student developers in the world, and yet none of their currently registered CS based student
      organizations are dedicated to creating solutions that make students lives easier. It is our mission to provide
      tools and services to the UIUC student body that will benefit the community; from course reviews to schedule
      makers and everything in between.
    </p>
    <p>
      If you're interested in joining Illinois Labs, check out some of our open positions! We're always looking for
      motivated developers and UI/UX designers.
    </p>
  </section>
</div>
