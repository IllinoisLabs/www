import members from './_members.js';

const contents = JSON.stringify(members.map(post => {
	return {
		title: post.title,
		slug: post.slug,
		description: post.description
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}