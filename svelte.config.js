// const sveltePreprocess = require('svelte-preprocess');

// module.exports = {
//   preprocess: preprocess()
// };


// svelte.config.js
import preprocess from 'svelte-preprocess';

/**
 * This will add autocompletion if you're working with SvelteKit
 *
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
  preprocess: preprocess(),
};

export default config;
