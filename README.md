[![Deploy to GitHub Pages](https://github.com/josecelano/svelte-deploy-with-github-actions/actions/workflows/deploy.yml/badge.svg)](https://github.com/josecelano/svelte-deploy-with-github-actions/actions/workflows/deploy.yml)

This is a sample project to learn how to deploy [Svelte](https://svelte.dev) applications to [GitHub Pages](https://pages.github.com/) using [GitHub Actions](https://docs.github.com/en/actions).

You can see this live page here: https://josecelano.github.io/svelte-deploy-with-github-actions/

The page itself contains the explanations about how to deploy Svelte Apps to GitHub Pages using GitHub Actions.

## Get started

```
git clone git@github.com:josecelano/svelte-deploy-with-github-actions.git
```

Install the dependencies...

```bash
cd svelte-deploy-with-github-actions
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Links

* [Document how to use with github pages with Svelte](https://github.com/sveltejs/v2.svelte.dev/issues/360)
* [Deploy a Sapper Web App Automatically to GitHub Pages using GitHub Actions](https://gavinr.com/svelte-sapper-github-pages-actions/)
* [How to deploy a Sapper PWA on GitHub Pages](https://dev.to/pixeline/how-to-deploy-a-sapper-pwa-on-github-pages-47lc)
* [NPM package to publish files to a gh-pages branch on GitHub (or any other branch anywhere else)](https://www.npmjs.com/package/gh-pages)
