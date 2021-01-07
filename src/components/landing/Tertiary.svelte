<style>
  .wrap {
    display: block;
    background-color: var(--dark);
    border-radius: 0;
    position: relative;
    padding-bottom: 2em;
    margin: 15em var(--mg) 7.5em;
    color: var(--off-white);
  }

  .wrap::after {
    --height: 10em;

    position: absolute;
    bottom: calc(-1 * var(--height) + 1px);
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
    top: calc(-1 * var(--height) + 1px);
    content: '';
    display: block;
    background-color: var(--dark);
    height: var(--height);
    width: 100%;
    clip-path: polygon(0 35%, 100% 0, 100% 100%, 0 100%);
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
    flex: 1;
  }

  section div:nth-child(2) {
    flex: 1;
    margin-left: var(--mg);
  }

  @media only screen and (max-width: 885px) {
    section div:nth-child(2) {
      display: none;
    }
  }
</style>

<div class="wrap dark">
  <section>
    <div>
      <h2>About</h2>
      <p>
        We're a team of software developers and designers dedicated to improving the college expereince at UIUC. As a
        team, we believe in making educational resources that will make school less stressful for everyone. We firmly
        believe that Illinois Labs is a unique computer science organization, with a startup-like engineering workflow
        and a tenacious desire for growth for the sake of giving back to all current and future Illini.
      </p>
      <p>
        If you're interested in joining Illinois Labs, check out some of our open positions! We're always looking for
        motivated developers and UI/UX designers.
      </p>
    </div>
    <div><img src="/blurcards.svg" alt="about graphic" /></div>
  </section>
</div>
