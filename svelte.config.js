// const sveltePreprocess = require('svelte-preprocess');

// module.exports = {
//   preprocess: sveltePreprocess()
// };


// // svelte.config.js
// import preprocess from 'svelte-preprocess';

// /**
//  * This will add autocompletion if you're working with SvelteKit
//  *
//  * @type {import('@sveltejs/kit').Config}
//  */
// const config = {
//   preprocess: preprocess(),
// };

// export default config;

// svelte.config.js
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: preprocess(),
};

export default config;
