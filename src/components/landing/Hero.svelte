<style>
    section {
        width: 95%;
        height: 100%;
        padding-bottom: 2em;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        border: 5px white;
    }

    .wrap {
        display: block;
        background-color: var(--off-white);
        padding-top: 20em;
        min-height: calc(100vh - 45em);
        margin: 0.75em;
        border-radius: 0.75em 0.75em 0 0;
        position: relative;
        margin-bottom: 20em;
    }

    .wrap::after {
        position: absolute;
        bottom: -20em;
        content: '';
        display: block;
        background-color: var(--off-white);
        height: 20em;
        width: 100%;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 70%);
        border-radius: 0 0 0.75em 0.75em;
    }

    aside {
        flex: 1;
    }

    aside h1 {
        font-weight: 600;
        font-size: 24px;
        color: var(--orange);
        margin-bottom: 1.2em;
        font-family: 'Krona One', sans-serif;
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
    }

    a.button {
		padding: 0.5em 1.25em 0.5em 1.5em;
		background-color: var(--blue);
		color: white;
        border-radius: 2em;
        text-decoration: none;
        box-sizing: border-box;
    }

    a.button.secondary {
        background-color: inherit;
        color: var(--blue);
    }

    a.button::after {
        content: '→';
        padding-left: 0.35em;
        padding-right: 0.35em;
        transition: padding 0.2s ease-in-out;
    }

    a.button:hover::after {
        content: '→';
        padding-left: 0.7em;
        padding-right: 0;
    }
    
    aside:last-child {
        padding-left: 10vw;
    }

    @media only screen and (max-width: 885px) {
        section {
            flex-flow:column;
        }
        aside {
            flex: none;
        }
        aside:last-child {
            padding-left: 0;
        }
    }
</style>

<div class="wrap">
    <section class="container">
        <aside>
            <h1>Illinois Labs</h1>
            <p class="big">
                A student led organization at UIUC dedicated to improving student life on and off campus.
            </p>
        </aside>
        <aside>
            <p style="margin-bottom: 1.75em;">
                Interested?<br />Click below for more about us and how to join.
            </p>
            <a href="join" class="button">Join Us</a>
            <a href="work" class="button secondary">Our Work</a>
        </aside>
    </section>
</div>