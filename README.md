# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Repository layout

- All site code lives under `docusaurus/`. Change into this directory before running the commands below.
- The project requires **Node.js 18** or newer (see `docusaurus/package.json`).
- Builds are accelerated with the `@docusaurus/faster` plugin, which uses the Rspack bundler and persistent cache.
- A Dockerfile and `cloudbuild.yaml` are provided to deploy the site as a container on Google Cloud Run.
- See [CONTRIBUTING.md](CONTRIBUTING.md) for documentation authoring conventions including how to embed Material icons in MDX.
- Docs ship common React components under `src/components/` including a `ResponsiveTable` wrapper and reusable Material icon helpers.

### Installation

```bash
$ npm install
```

### Local Development

```bash
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```bash
$ USE_SSH=true npm run deploy
```

Not using SSH:

```bash
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
