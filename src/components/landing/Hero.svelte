<style>
  section {
    width: 95%;
    height: 100%;
    margin-top: -6em;
    padding-bottom: 2em;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border: 5px white;
  }

  .wrap {
    display: flex;
    background-color: var(--off-white);
    background-image: url('/hero.svg');
    background-position: bottom calc(-100px + 1vw) left;
    background-repeat: repeat-x;
    min-height: calc(100vh - 7.5vw);
    margin: var(--mg);
    border-radius: var(--br);
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
    align-items: center;
  }

  aside {
    flex: 1;
    display: block;
    width: 100%;
  }

  aside p.big {
    font-weight: 600;
    font-size: 32px;
    margin: 0;
    line-height: 1.2;
  }

  aside p {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
  }

  aside:last-child {
    padding-left: 10vw;
  }

  @media only screen and (max-width: 885px) {
    section {
      flex-flow: column;
    }
    aside {
      flex: none;
    }
    aside:last-child {
      padding-left: 0;
    }
  }

  @media only screen and (max-width: 800px) {
    aside p.big {
      font-size: 24px;
      line-height: 1.2;
    }

    aside p {
      font-size: 18px;
    }
  }
</style>

<div class="wrap">
  <section class="container">
    <aside>
      <!-- <h1>Illinois Labs</h1> -->
      <p class="big">A student led organization at UIUC dedicated to improving student life on and off campus.</p>
    </aside>
    <aside>
      <p style="margin-top: 0; margin-bottom: 1.75em;">
        <strong>Interested?</strong><br />See below for more about us and how to join.
      </p>
      <a href="/join" class="button">Join Us</a>
      <a href="/about" class="button secondary">Learn More</a>
    </aside>
  </section>
</div>
