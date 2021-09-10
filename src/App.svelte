<main>
	<h1>How to deploy <a href="https://svelte.dev/">Svelte</a> apps to <a href="https://pages.github.com/">GitHub Pages</a> using <a href="https://docs.github.com/en/actions">GitHub Actions</a></h1>
	<h2>1. Install NPM package to create gh-pages branch</h2>
	<pre>
		<code>
			npm install gh-pages --save-dev
		</code>
	</pre>

	<h2>2. Create personall GitHub token</h2>

	You are going to need a [GitHub personal token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) with access to your publis repos. After creating the token you can export it in your environment:

	<pre>
		<code>
			export GITHUB_TOKEN=ghp_RBJH34SD7KJDasAS6afJAHG3DJKHKASDHJAsdfg3SD
		</code>
	</pre>

	<h2>3. Build the app and push it on the gh-pages branch</h2>	

	Then you can run this command:
	<pre>
		<code>
			npm run build && ./scripts/gh-pages.js
		</code>
	</pre>	
	to build the app and create the gh-pages branch on the GitHub repo. You should see something like:

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

	And you should have a new [gh-pages branch](https://github.com/josecelano/svelte-deploy-with-github-actions/tree/gh-pages) on you GitHub repo with the production app.

	<h2>3. Application already publish</h2>		

	At this point you should have the applciation already publish on GitHub pages on a URL like this:

	[https://josecelano.github.io/svelte-deploy-with-github-actions/](https://josecelano.github.io/svelte-deploy-with-github-actions/)

	I had to make some changes in the Svelte app index file, using a relative path in the href attribute of the resouces:

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

	<h2>3. Adding the GitHib workflow</h2>

	At this point we can publish the app but only manually and we want to do it automatically using GitHub Actions.

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
		text-transform: uppercase;
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