var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t){t.parentNode.removeChild(t)}let i;function c(t){i=t}const r=[],h=[],u=[],p=[],d=Promise.resolve();let g=!1;function b(t){u.push(t)}let f=!1;const m=new Set;function y(){if(!f){f=!0;do{for(let t=0;t<r.length;t+=1){const e=r[t];c(e),v(e.$$)}for(c(null),r.length=0;h.length;)h.pop()();for(let t=0;t<u.length;t+=1){const e=u[t];m.has(e)||(m.add(e),e())}u.length=0}while(r.length);for(;p.length;)p.pop()();g=!1,f=!1,m.clear()}}function v(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}const $=new Set;function w(t,e){-1===t.$$.dirty[0]&&(r.push(t),g||(g=!0,d.then(y)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(a,r,h,u,p,d,g,f=[-1]){const m=i;c(a);const v=a.$$={fragment:null,ctx:null,props:d,update:t,not_equal:p,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:r.context||[]),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||m.$$.root};g&&g(v.root);let j=!1;if(v.ctx=h?h(a,r.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return v.ctx&&p(v.ctx[t],v.ctx[t]=o)&&(!v.skip_bound&&v.bound[t]&&v.bound[t](o),j&&w(a,t)),e})):[],v.update(),j=!0,o(v.before_update),v.fragment=!!u&&u(v.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);v.fragment&&v.fragment.l(t),t.forEach(l)}else v.fragment&&v.fragment.c();r.intro&&((k=a.$$.fragment)&&k.i&&($.delete(k),k.i(_))),function(t,n,a,l){const{fragment:i,on_mount:c,on_destroy:r,after_update:h}=t.$$;i&&i.m(n,a),l||b((()=>{const n=c.map(e).filter(s);r?r.push(...n):o(n),t.$$.on_mount=[]})),h.forEach(b)}(a,r.target,r.anchor,r.customElement),y()}var k,_;c(m)}function k(e){let n;return{c(){var t,e,o,s;t="main",n=document.createElement(t),n.innerHTML='<h1 class="svelte-ajtcho">How to deploy <a href="https://svelte.dev/">Svelte</a> apps to <a href="https://pages.github.com/">GitHub Pages</a> using <a href="https://docs.github.com/en/actions">GitHub Actions</a></h1> \n\t<h2>1. Install NPM package to create gh-pages branch</h2> \n\t<pre class="svelte-ajtcho"><code class="svelte-ajtcho">npm install gh-pages --save-dev</code></pre> \n\n\t<h2>2. Create personall GitHub token</h2>\n\n\tYou are going to need a [GitHub personal token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) with access to your publis repos. After creating the token you can export it in your environment:\n\n\t<pre class="svelte-ajtcho"><code class="svelte-ajtcho">export GITHUB_TOKEN=ghp_RBJH34SD7KJDasAS6afJAHG3DJKHKASDHJAsdfg3SD</code></pre> \n\n\t<h2>3. Build the app and push it on the gh-pages branch</h2>\t\n\n\tThen you can run this command:\n\t<pre class="svelte-ajtcho"><code class="svelte-ajtcho">npm run build &amp;&amp; ./scripts/gh-pages.js</code></pre>\t\n\tto build the app and create the gh-pages branch on the GitHub repo. You should see something like:\n\n\t<pre class="svelte-ajtcho"><code class="svelte-ajtcho">josecelano@josecelano:~/Documents/github/josecelano/svelte-deploy-with-github-actions$ npm run deploy\n\n&gt; svelte-deploy-with-github-actions@1.0.0 deploy /home/josecelano/Documents/github/josecelano/svelte-deploy-with-github-actions\n&gt; npm run build &amp;&amp; node ./scripts/gh-pages.js\n\n\n&gt; svelte-deploy-with-github-actions@1.0.0 build /home/josecelano/Documents/github/josecelano/svelte-deploy-with-github-actions\n&gt; rollup -c\n\n\nsrc/main.js → public/build/bundle.js...\ncreated public/build/bundle.js in 685ms\nDeploy Complete!</code></pre>\t\n\n\tAnd you should have a new [gh-pages branch](https://github.com/josecelano/svelte-deploy-with-github-actions/tree/gh-pages) on you GitHub repo with the production app.\n\n\t<h2>3. Application already publish</h2>\t\t\n\n\tAt this point you should have the applciation already publish on GitHub pages on a URL like this:\n\n\t[https://josecelano.github.io/svelte-deploy-with-github-actions/](https://josecelano.github.io/svelte-deploy-with-github-actions/)\n\n\tI had to make some changes in the Svelte app index file, using a relative path in the href attribute of the resouces:\n\n\t<pre class="svelte-ajtcho"><code class="svelte-ajtcho">&lt;!DOCTYPE html&gt;\n&lt;html lang=&quot;en&quot;&gt;\n&lt;head&gt;\n\t&lt;meta charset=&#39;utf-8&#39;&gt;\n\t&lt;meta name=&#39;viewport&#39; content=&#39;width=device-width,initial-scale=1&#39;&gt;\n\n\t&lt;title&gt;Svelte app&lt;/title&gt;\n\n\t&lt;link rel=&#39;icon&#39; type=&#39;image/png&#39; href=&#39;<b>./favicon.png&#39;&gt;</b>;\n\t&lt;link rel=&#39;stylesheet&#39; href=&#39;<b>./global.css&#39;&gt;</b>;\n\t&lt;link rel=&#39;stylesheet&#39; href=&#39;<b>./build/bundle.css&#39;&gt;</b>;\n\n\t&lt;script defer src=&#39;<b>./build/bundle.js&#39;&gt;&lt;/script&gt;</b>;\n&lt;/head&gt;\n&lt;body&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre> \n\n\t<h2>3. Adding the GitHib workflow</h2>\n\n\tAt this point we can publish the app but only manually and we want to do it automatically using GitHub Actions. \n\tWe have two options the create the GitHub workflow. The first one is trying to replicate the same thing we do manually on the workflow. \n\tAnd the second option is using an action from the GitHub marketplace.\n\n\tI&#39;m going to do the second one.',e=n,o="class",null==(s="svelte-ajtcho")?e.removeAttribute(o):e.getAttribute(o)!==s&&e.setAttribute(o,s)},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e)},p:t,i:t,o:t,d(t){t&&l(n)}}}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),j(this,t,null,k,a,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
