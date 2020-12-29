// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_members.js` rather than `members.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

import type { post_detailed } from '../../utils/types';

const members: post_detailed[] = [
  {
    title: 'Siraj Chokshi',
	slug: 'siraj',
	description: "Hi, I'm Siraj!",
	html: `
			<p>First, you have to know what <a href='https://svelte.dev'>Svelte</a> is. Svelte is a UI framework with a bold new idea: rather than providing a library that you write code with (like React or Vue, for example), it's a compiler that turns your components into highly optimized vanilla JavaScript. If you haven't already read the <a href='https://svelte.dev/blog/frameworks-without-the-framework'>introductory blog post</a>, you should!</p>

			<p>Sapper is a Next.js-style framework (<a href='blog/how-is-sapper-different-from-next'>more on that here</a>) built around Svelte. It makes it embarrassingly easy to create extremely high performance web apps. Out of the box, you get:</p>

			<ul>
				<li>Code-splitting, dynamic imports and hot module replacement, powered by webpack</li>
				<li>Server-side rendering (SSR) with client-side hydration</li>
				<li>Service worker for offline support, and all the PWA bells and whistles</li>
				<li>The nicest development experience you've ever had, or your money back</li>
			</ul>

			<p>It's implemented as Express middleware. Everything is set up and waiting for you to get started, but you keep complete control over the server, service worker, webpack config and everything else, so it's as flexible as you need it to be.</p>
		`,
  },

  {
    title: 'Davis Keene',
	slug: 'davis',
	description: "Hi, I'm Davis!",
	html: `

			<style>
				.flex-container {
					display: flex;
				}
				
				.flex-child {
					flex: 1;
				}
			</style>

			<div class="flex-container">
				<div class="flex-child">
					<img src="/headshots/davis.jpg" style="width: 500px; height: 500px;"> </img>
				</div>


				<div class="flex-child";">
				<h2>Position: Project Lead</h2>
				<p>Hi everyone! My name is Davis, and I'm a sophomore at UIUC studying Statistics and Computer Science. I'm the R&D Lead at Founders Entrepreneurs on campus,
				and a course developer (and former Head CA) of CS 125. After being all around the Computer Science ecosystem at U of I, I'm excited to finally be making software
				that isn't just for classes and startups at the school, but for all students.
				</p>

				<h3> Hobbies </h3>
				<p>Yo-Yoing, Tennis, Running, Skating, Piano, Super Smash Bros., annoying Siraj.</p>

				<h3> What I Hope to Achieve </h3>
				<p> I hope that eventually one of our products will be widely used by Illinois students, and that Illinois Labs will become a self-sufficient organization capable
				of changing students' lives.
				</div>
			</div>
		`,
  },

  {
    title: 'Neeraj Agarwal',
	slug: 'neeraj',
	description: "Hi, I'm Neeraj!",
    html: `
			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

			<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
		`,
  },

  {
    title: 'Gene Wang',
	slug: 'gene',
	description: "Hi, I'm Gene!",
	html: `
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://vercel.com/'>Vercel</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`,
  },
];

members.forEach((post) => {
  post.html = post.html.replace(/^\t{3}/gm, '');
});

export default members;
