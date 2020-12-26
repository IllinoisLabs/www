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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione vitae dolor. Voluptatem vitae ipsa odio
      recusandae nisi omnis consequatur expedita, vero laborum sint doloremque quaerat, quibusdam ipsam aspernatur
      dignissimos!
    </p>
  </section>
</div>
