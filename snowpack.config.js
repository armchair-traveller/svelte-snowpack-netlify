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
    target: "es2020",
    treeshake: true,
    splitting: true,
    // Additional opts:
    // https://www.snowpack.dev/guides/optimize-and-bundle#option-1%3A-built-in-optimizations
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
