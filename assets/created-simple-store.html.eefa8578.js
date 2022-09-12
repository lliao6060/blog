import{g as n}from"./app.0e540465.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u5275\u5EFAvue-simple-store" tabindex="-1"><a class="header-anchor" href="#\u5275\u5EFAvue-simple-store" aria-hidden="true">#</a> \u5275\u5EFAvue simple store</h1><h6 id="tags-vue-vue2-vuex-store" tabindex="-1"><a class="header-anchor" href="#tags-vue-vue2-vuex-store" aria-hidden="true">#</a> tags: <code>vue</code> <code>vue2</code> <code>vuex</code> <code>store</code></h6><blockquote><p>\u5982\u679C\u5C08\u6848\u8F03\u5C0F\u4E0D\u9808\u7528\u5230<code>vuex</code>\u7684\u8A71\u53EF\u4EE5\u81EA\u884C\u5EFA\u7ACB\u4E00\u500B\u5171\u901A\u5009\u5EAB</p></blockquote><ol><li>\u5275\u5EFAstore\u8CC7\u6599\u593E, \u88CF\u982D\u5206\u5225\u653E<code>index.js</code> \u53CA <code>created-store.js</code></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// in created-store.js</span>
<span class="token keyword">function</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">{</span>
		<span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
  
  <span class="token keyword">export</span> <span class="token keyword">default</span> createStore<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// in index.js</span>
<span class="token keyword">import</span> createStore <span class="token keyword">from</span> <span class="token string">&#39;./created-store&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">hideEvent</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="2"><li>\u5728<code>main.js</code>\u5F15\u5165</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3"><li>\u5C31\u53EF\u4EE5\u5728\u7D44\u4EF6\u4E2D\u4F7F\u7528\u62C9\u{1F4AF}\u{1F604}</li></ol>`,9);function p(t,o){return e}var l=s(a,[["render",p]]);export{l as default};
