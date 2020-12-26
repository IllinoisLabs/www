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
        <h3>Feature 1</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio debitis laborum dicta, commodi odio aut
          dolores delectus.
        </p>
        <p>Earum impedit reiciendis saepe, provident nam quod vero, praesentium ut, perspiciatis animi minus?</p>
      </div>
      <div>
        <h3>Feature 2</h3>
        <p>Earum impedit reiciendis saepe, provident nam quod vero, praesentium ut, perspiciatis animi minus?</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio debitis laborum dicta, commodi odio aut
          dolores delectus.
        </p>
      </div>
      <div>
        <h3>Feature 3</h3>
        <p>
          Optio debitis laborum dicta, commodi odio aut dolores delectus. Earum impedit reiciendis saepe, provident nam
          quod vero.
        </p>
        <p>Earum impedit reiciendis saepe, provident nam quod vero, praesentium ut, perspiciatis animi minus?</p>
      </div>
    </article>
  </section>
</div>
