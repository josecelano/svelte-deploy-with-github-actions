<main>
	<h1>How to deploy <a href="https://svelte.dev/">Svelte</a> apps to <a href="https://pages.github.com/">GitHub Pages</a> using <a href="https://docs.github.com/en/actions">GitHub Actions</a></h1>
	
	GitHub repo for this post: <a href="https://github.com/josecelano/svelte-deploy-with-github-actions">https://github.com/josecelano/svelte-deploy-with-github-actions</a>
	
	<h2>1. Install NPM package to create gh-pages branch</h2>
	<pre>
		<code>
			npm install gh-pages --save-dev
		</code>
	</pre>

	<h2>2. Create a personal GitHub token</h2>

	You are going to need a <a href="https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token">GitHub personal token</a> with access to your public repos. After creating the token you can export it in your environment:

	<pre>
		<code>
			export GITHUB_TOKEN=ghp_RBJH34SD7KJDasAS6afJAHG3DJKHKASDHJAsdfg3SD
		</code>
	</pre>

	<h2>3. Build the app and push it on the gh-pages branch</h2>

	I'm using a <a href="https://www.npmjs.com/package/gh-pages">NPM package</a> to create the initial version of the gh-pages branch. This package only creates a temporary folder with a new git repo in order to push to gh-pages branch.

	The <a href="https://github.com/josecelano/svelte-deploy-with-github-actions/blob/master/scripts/gh-pages.js">script</a> to do it it's very simple. You can see it <a href="https://github.com/josecelano/svelte-deploy-with-github-actions/blob/master/scripts/gh-pages.js">here</a>.<br>

	<br>
	Some people is using Git subtree: 
	
	<ul>
		<li><a href="https://www.fahdmurtaza.com/github-pages-deploying-a-subfolder-to-github-pages/">Github Pages: Deploying a subfolder to GitHub Pages (by Fahad Murtaza)</a></li>
		<li><a href="https://davidhallin.com/blog/deploying-a-static-site-to-github-pages/">Deploying a static site to a repo subtree and hosting it for free on github pages (by David Hallin)</a></li>
	</ul>

	but I do not want to add the build artifact to the master branch of the repo.<br>
	<br>
	
	And finally this is the command you can run to build and push the app:
	<pre>
		<code>
			npm run build && ./scripts/gh-pages.js
		</code>
	</pre>	
	You should see something like:

	<pre>
		<code>
josecelano@josecelano:~/Documents/github/josecelano/svelte-deploy-with-github-actions$ npm run deploy

> svelte-deploy-with-github-actions@1.0.0 deploy /home/josecelano/Documents/github/josecelano/svelte-deploy-with-github-actions
> npm run build && node ./scripts/gh-pages.js


> svelte-deploy-with-github-actions@1.0.0 build /home/josecelano/Documents/github/josecelano/svelte-deploy-with-github-actions
> rollup -c


src/main.js → public/build/bundle.js...
created public/build/bundle.js in 685ms
Deploy Complete!
		</code>
	</pre>	

	And you should have a new <a href="https://github.com/josecelano/svelte-deploy-with-github-actions/tree/gh-pages">gh-pages branch</a> on you GitHub repo with the production app.

	<h2>4. Application already published</h2>		

	At this point you should have the application already published on GitHub Pages on a URL like this:<br>
	<br>
	<a href="https://josecelano.github.io/svelte-deploy-with-github-actions/">https://josecelano.github.io/svelte-deploy-with-github-actions/</a><br>
	<br>
	I had to make some changes in the Svelte app index file in order to make it work. You have to use relative paths in the href attribute of the resouces:

	<pre>
		<code>
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
	&lt;meta charset='utf-8'&gt;
	&lt;meta name='viewport' content='width=device-width,initial-scale=1'&gt;

	&lt;title&gt;Svelte app&lt;/title&gt;

	&lt;link rel='icon' type='image/png' href='<b>./favicon.png'&gt</b>;
	&lt;link rel='stylesheet' href='<b>./global.css'&gt</b>;
	&lt;link rel='stylesheet' href='<b>./build/bundle.css'&gt</b>;

	&lt;script defer src='<b>./build/bundle.js'&gt;&lt;/script&gt</b>;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;/html&gt;
		</code>
	</pre>

	<h2>5. Adding the GitHub Workflow</h2>

	At this point we can publish the app but only manually and we want to do it automatically using GitHub Actions.<br> 
	<br>
	We have two options to create the GitHub workflow.<br>
	<br>
	The first one is trying to replicate the same thing we do manually on the workflow.<br>
	<br>
	And the second option is to use an action from the <a href="https://github.com/marketplace/actions/deploy-to-github-pages">GitHub marketplace</a>. I'm going to do the second one.

	<pre>
		<code>	
# This is a basic workflow to automatically build a Svelte app and deploy it to GitHub Pages

name: Deploy to GitHub Pages

on:
  push:
  branches: [ master ]
  workflow_dispatch:

jobs:
  build:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v2

    - name: Install and Build
      run: |
        npm install
        npm run build
			
    - name: Deploy to GitHub Pages
      uses: JamesIves/github-pages-deploy-action@4.1.5
      with:
        branch: gh-pages
        folder: public
			</code>
		</pre>


	You can find the final workflow file here: <a href="https://github.com/josecelano/svelte-deploy-with-github-actions/blob/master/.github/workflows/deploy.yml">https://github.com/josecelano/svelte-deploy-with-github-actions/blob/master/.github/workflows/deploy.yml</a>


</main>

<style>
	main {
		text-align: left;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	pre code {
		background-color: #eee;
		border: 1px solid #999;
		display: block;
		padding: 20px;
		text-align: left;
}	
</style>