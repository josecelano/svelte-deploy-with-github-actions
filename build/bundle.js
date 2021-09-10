var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t){t.parentNode.removeChild(t)}let r;function l(t){r=t}const i=[],u=[],p=[],h=[],d=Promise.resolve();let f=!1;function g(t){p.push(t)}let m=!1;const b=new Set;function $(){if(!m){m=!0;do{for(let t=0;t<i.length;t+=1){const e=i[t];l(e),y(e.$$)}for(l(null),i.length=0;u.length;)u.pop()();for(let t=0;t<p.length;t+=1){const e=p[t];b.has(e)||(b.add(e),e())}p.length=0}while(i.length);for(;h.length;)h.pop()();f=!1,m=!1,b.clear()}}function y(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(g)}}const v=new Set;function j(t,e){-1===t.$$.dirty[0]&&(i.push(t),f||(f=!0,d.then($)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _(c,i,u,p,h,d,f,m=[-1]){const b=r;l(c);const y=c.$$={fragment:null,ctx:null,props:d,update:t,not_equal:h,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(b?b.$$.context:i.context||[]),callbacks:n(),dirty:m,skip_bound:!1,root:i.target||b.$$.root};f&&f(y.root);let _=!1;if(y.ctx=u?u(c,i.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return y.ctx&&h(y.ctx[t],y.ctx[t]=o)&&(!y.skip_bound&&y.bound[t]&&y.bound[t](o),_&&j(c,t)),e})):[],y.update(),_=!0,o(y.before_update),y.fragment=!!p&&p(y.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);y.fragment&&y.fragment.l(t),t.forEach(a)}else y.fragment&&y.fragment.c();i.intro&&((x=c.$$.fragment)&&x.i&&(v.delete(x),x.i(w))),function(t,n,c,a){const{fragment:r,on_mount:l,on_destroy:i,after_update:u}=t.$$;r&&r.m(n,c),a||g((()=>{const n=l.map(e).filter(s);i?i.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(g)}(c,i.target,i.anchor,i.customElement),$()}var x,w;l(b)}function x(e){let n;return{c(){var t,e,o,s;t="main",n=document.createElement(t),n.innerHTML='<h1 class="svelte-ajtcho">How to deploy <a href="https://svelte.dev/">Svelte</a> apps to <a href="https://pages.github.com/">GitHub Pages</a> using <a href="https://docs.github.com/en/actions">GitHub Actions</a></h1> \n\t<h2>1. Install NPM package to create gh-pages branch</h2> \n\t<pre class="svelte-ajtcho"><code class="svelte-ajtcho">npm install gh-pages --save-dev</code></pre>\n\n\tYou are going to need a GitHub personal token with access to your publis repos. After creating the token you can export it in your environment:\n\n\t<pre class="svelte-ajtcho"><code class="svelte-ajtcho">export GITHUB_TOKEN=ghp_RBJH34SD7KJDasAS6afJAHG3DJKHKASDHJAsdfg3SD</code></pre>\t\t\n\n\tThen you can run this command:\n\t<pre class="svelte-ajtcho"><code class="svelte-ajtcho">npm run build &amp;&amp; ./scripts/gh-pages.js</code></pre>\t\n\tto build the app and create the gh-pages branch on the GitHub repo. You should see something like:\n\n\t<pre class="svelte-ajtcho"><code class="svelte-ajtcho">josecelano@josecelano:~/Documents/github/josecelano/svelte-deploy-with-github-actions$ npm run deploy\n\n\t&gt; svelte-deploy-with-github-actions@1.0.0 deploy /home/josecelano/Documents/github/josecelano/svelte-deploy-with-github-actions\n\t&gt; npm run build &amp;&amp; node ./scripts/gh-pages.js\n\t\n\t\n\t&gt; svelte-deploy-with-github-actions@1.0.0 build /home/josecelano/Documents/github/josecelano/svelte-deploy-with-github-actions\n\t&gt; rollup -c\n\t\n\t\n\tsrc/main.js → public/build/bundle.js...\n\tcreated public/build/bundle.js in 685ms\n\tDeploy Complete!</code></pre>',e=n,o="class",null==(s="svelte-ajtcho")?e.removeAttribute(o):e.getAttribute(o)!==s&&e.setAttribute(o,s)},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e)},p:t,i:t,o:t,d(t){t&&a(n)}}}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),_(this,t,null,x,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map