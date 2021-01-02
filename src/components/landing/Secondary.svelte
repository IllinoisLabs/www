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
    display: flex;
  }

  .card-grid > div {
    flex: 3;
  }

  .card-grid > div:first-child {
    flex: 4;
    margin-right: calc(var(--mg) * 6);
  }

  .card-grid > div:last-child {
    margin-left: calc(var(--mg) * 2);
  }

  .card-grid > div > div {
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

  .card-grid > div:nth-child(2) > div:first-child > img {
    margin-top: 2em;
  }

  .card-grid > div:nth-child(3) > div:first-child > img {
    margin-top: 3.5em;
  }

  article {
    margin-top: 2em;
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

    .card-grid > div > div {
      margin-bottom: 2em;
      clear: both;
    }

    .card-grid > div > div > img {
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

    .card-grid > div:nth-child(2) > div:first-child > img,
    .card-grid > div:nth-child(3) > div:first-child > img {
      margin-top: inherit;
    }

    h3 {
      font-size: 18px;
    }
  }
</style>

<div class="wrap">
  <section>
    <article class="card-grid">
      <div>
        <h2>Our Solutions</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veritatis, pariatur, odio beatae accusantium,
          sapiente officia nihil laboriosam explicabo accusamus voluptatum cumque odit eius non obcaecati amet vero
          natus culpa!
        </p>
        <br />
        <a href="/about" class="button">Learn More</a>
      </div>
      <div>
        <div>
          <img src="icons/puzzle.svg" alt="" />
          <h3>Learning Emphasis</h3>
          <p>
            Throughout building products for students theres a lot we can learn from the problems we solve and one
            another.
          </p>
        </div>
        <div>
          <img src="icons/clean.svg" alt="" />
          <h3>High Quality</h3>
          <p>
            Maintaining high standards for documentation and engineering practices allows us to quickly piece together
            quality software.
          </p>
        </div>
      </div>
      <div>
        <div>
          <img src="icons/window.svg" alt="" />
          <h3>Accessibility</h3>
          <p>
            By knowing our audience of students we can create usable, local solutions to problems within our community.
          </p>
        </div>
        <div>
          <img src="icons/trend.svg" alt="" />
          <h3>Retention</h3>
          <p>
            Working software is great, but the strongest products maintain value by keeping their users coming back.
          </p>
        </div>
      </div>
    </article>
  </section>
</div>
