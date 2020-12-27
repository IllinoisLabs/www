<style>
  :root {
    --bg-color: white;
  }

  .wrap {
    display: block;
    background-color: var(--bg-color);
    border-radius: 0;
    position: relative;
    margin: 0em var(--mg) 18em;
  }

  .wrap::after {
    --height: 10em;

    position: absolute;
    bottom: calc(-1 * var(--height));
    content: '';
    display: block;
    background-color: var(--bg-color);
    height: var(--height);
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);
    border-radius: 0 0 var(--br) var(--br);
  }
  .card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: var(--mg);
  }

  article {
    margin-top: 2em;
  }

  h3 {
    font-family: var(--font-stack);
  }
</style>

<div class="wrap">
  <section>
    <h2>What We Do</h2>
    <article class="card-grid">
      <div>
        <h3>Illinois Course Review</h3>
        <p>
          All courses at UIUC are unique and special in their own way. Rather than judging a class by its perceived
          difficulty, we wanted to create a course review website that judges classes by their content instead. ICR
          (Illinois Course Review) does just that.
        </p>
        <p>Project status: <span style="color: var(--orange)">Under Construction</span></p>
      </div>
      <div>
        <h3>Smart Schedules</h3>
        <p>
          SS is a "smart" schedule generator that will help you graduate if it's the last thing we do. Considers major
          requirements, walking distance between classes, average GPA of courses, and more to deliver the perfect
          schedule.
        </p>
        <p>Project status: <span style="color: var(--orange)">Under Construction</span></p>
      </div>
      <div>
        <h3>Your Idea Here!</h3>
        <p>
          We're always looking for the next big thing that will improve students lives. If you have an idea, let us know
          about it by applying!
        </p>
        <p>Project status: <span style="color: var(--green)">Waiting to be Discovered!</span></p>
      </div>
    </article>
  </section>
</div>
