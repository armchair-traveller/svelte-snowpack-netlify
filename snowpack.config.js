/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    assets: "/",
    src: "/dist",
  },
  plugins: ["@snowpack/plugin-svelte"],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Use built-in esbuild bundling for build */
    bundle: true,
    minify: true,
    treeshake: true,
    splitting: true,
    target: "es2020",
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
