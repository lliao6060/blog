import{i as t,o,c,a as n,k as e,F as l,g as p,b as s}from"./app.9850c375.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const i={},r=p('<h1 id="gulp-\u7B46\u8A18" tabindex="-1"><a class="header-anchor" href="#gulp-\u7B46\u8A18" aria-hidden="true">#</a> Gulp \u7B46\u8A18</h1><blockquote><p>gulp \u662F task runner \u4EFB\u52D9\u7BA1\u7406\u5DE5\u5177\u3002 \u50CF\u662F\u4E00\u500B\u6D41\u6C34\u7DDA\uFF0C\u6574\u500B\u7522\u54C1\u5F9E\u7121\u5230\u6709\uFF0C\u90FD\u8981\u53D7\u6D41\u6C34\u7DDA\u7684\u63A7\u5236\uFF0C\u5728\u6D41\u6C34\u7DDA\u4E0A\u6211\u5011\u53EF\u4EE5\u5C0D\u7522\u54C1\u9032\u884C\u7BA1\u7406</p></blockquote><h3 id="\u7C21\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7C21\u4ECB" aria-hidden="true">#</a> \u7C21\u4ECB</h3><p>\u70BA\u4E86\u5C07\u5DE5\u4F5C\u6D41\u7A0B\u81EA\u52D5\u5316\uFF0C\u4E5F\u5C31\u662F\u6574\u5408\u524D\u7AEF\u958B\u767C\u74B0\u5883\u3002 <strong>\u85C9\u7531\u7C21\u5316\u5DE5\u4F5C\u91CF</strong>\uFF0C\u53EF\u8B93\u958B\u767C\u8005\u5C07\u91CD\u9EDE\u653E\u5728\u529F\u80FD\u7684\u958B\u767C\u4E0A\u3002</p><h4 id="\u4EC0\u9EBC\u6642\u5019\u9700\u8981\u7528" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u9EBC\u6642\u5019\u9700\u8981\u7528" aria-hidden="true">#</a> \u4EC0\u9EBC\u6642\u5019\u9700\u8981\u7528\uFF1F</h4><p>\u4F8B\u5982\u4E0B\u5217\u529F\u80FD\uFF1A</p><ul><li>\u8B93\u7DB2\u9801\u81EA\u52D5\u91CD\u65B0\u6574\u7406</li><li>\u7DE8\u8B6F <code>SASS</code> \u3001\u7A0B\u5F0F\u78BC\u6AA2\u6E2C</li><li>\u58D3\u7E2E <code>CSS</code>, <code>JS</code>, \u5716\u6A94</li><li>\u81EA\u8A02\u4EFB\u52D9\u6D41\u7A0B..</li></ul><h3 id="\u57FA\u672C\u5BEB\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u5BEB\u6CD5" aria-hidden="true">#</a> \u57FA\u672C\u5BEB\u6CD5</h3><blockquote><p>\u5EFA\u8B70\u4E00\u500B function \u53EA\u5B8C\u6210\u81EA\u5DF1\u7684\u4EFB\u52D9\u5167\u5BB9\uFF0C\u6700\u5F8C\u518D\u5C0E\u51FA\u4EFB\u52D9 \u5FC5\u9808\u660E\u78BA\u544A\u77E5\u4EFB\u52D9\u5DF2\u7D93\u5B8C\u6210\uFF0C\u597D\u8B93 Gulp \u6B63\u5E38\u7684\u8655\u7406\u6D41\u7A0B</p></blockquote><h4 id="gulp-\u63D0\u4F9B\u7684-api" tabindex="-1"><a class="header-anchor" href="#gulp-\u63D0\u4F9B\u7684-api" aria-hidden="true">#</a> GULP \u63D0\u4F9B\u7684 API</h4><ul><li><code>gulp.task(name, fn)</code> \u5B9A\u7FA9\u4E00\u500B\u4EFB\u52D9\u540D\u7A31\uFF0C\u63A5\u4E0B\u4F86\u6307\u5B9A\u4EFB\u52D9\u7684\u5DE5\u4F5C\u5167\u5BB9</li><li><code>gulp.src(glob)</code> \u6A94\u6848\u4F86\u6E90</li><li><code>gulp.dest(folder)</code> \u8655\u7406\u5F8C\u7684\u6A94\u6848\u8F38\u51FA\u4F4D\u7F6E</li><li><code>gulp.pipe</code> \u4E32\u6D41\u4F86\u6E90\u6A94\u6848\u5230\u53E6\u500B\u5916\u639B</li><li><code>gulp.watch</code> \u76E3\u63A7\u4EFB\u52D9\uFF0C\u7576\u6A94\u6848\u6709\u66F4\u52D5\u6642\uFF0C\u4FBF\u6703\u57F7\u884C\u76F8\u5C0D\u61C9\u7684\u4EFB\u52D9</li><li><code>gulp.series()</code> \u7528\u65BC\u4E32\u884C(<strong>\u540C\u6B65</strong>)\u4EFB\u52D9\u57F7\u884C\uFF0C\u53EF\u63A5\u53D7 <code>taskname</code> \u6216 <code>function</code> \u4F5C\u70BA\u4EFB\u52D9\u57F7\u884C\u53C3\u6578\u3002</li><li><code>gulp.parallel</code> \u7528\u65BC\u4E26\u884C(<strong>\u975E\u540C\u6B65</strong>)\u4EFB\u52D9\u57F7\u884C\uFF0C\u53EF\u63A5\u53D7 <code>taskname</code> \u6216 <code>function</code> \u4F5C\u70BA\u4EFB\u52D9\u57F7\u884C\u53C3\u6578\u3002</li></ul><h4 id="\u5E38\u7528\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u63D2\u4EF6" aria-hidden="true">#</a> \u5E38\u7528\u63D2\u4EF6</h4>',12),k={href:"https://www.cnblogs.com/jiaoshou/p/12184941.html",target:"_blank",rel:"noopener noreferrer"},d=s("gulp-replace"),g=s(" \u5B57\u7B26\u4E32\u66FF\u63DB\u63D2\u4EF6"),b={href:"https://www.npmjs.com/package/gulp-util",target:"_blank",rel:"noopener noreferrer"},h=s("gulp-util(gulp 4.0\u5EFA\u8B70\u68C4\u7528)"),m=p(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gutil.log\u65B9\u6CD5\u8207console\u7684\u5DEE\u7570\u662F\uFF1A
    1. gutil.log\u57FA\u65BCchalk\u7684\u5BE6\u4F8B\uFF0C\u4E5F\u5C31\u662F\u80FD\u5728\u7D42\u7AEF\u986F\u793A\u984F\u8272
    2. gutil.log\u652F\u63F4\u50B3\u5165\u591A\u500B\u53C3\u6578\uFF0C\u5217\u5370\u7D50\u679C\u6703\u5C07\u591A\u500B\u53C3\u6578\u7528\u7A7A\u683C\u9023\u63A5\u8D77\u4F86
    3. gutil.log\u6703\u5E36\u4E0A\u6642\u9593\u6233

new gulpUtil.PluginError(pluginName, message[, options])
    - pluginName \u6307\u63D2\u4EF6\u7684\u6A21\u7D44\u540D\u7A31
    - message \u53EF\u4EE5\u662F\u5B57\u4E32\u6216\u73FE\u6709\u932F\u8AA4\u3002\u9810\u8A2D\u60C5\u6CC1\u4E0B\uFF0C\u4E0D\u6703\u986F\u793A\u5806\u758A\u3002
      \u5982\u679C\u60A8\u8A8D\u70BA\u5806\u758A\u5C0D\u60A8\u7684\u932F\u8AA4\u5F88\u91CD\u8981\uFF0C\u8ACB\u5C07options.showStack\u8A2D\u70BAtrue\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="\u7BC4\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u7BC4\u4F8B" aria-hidden="true">#</a> \u7BC4\u4F8B</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> gulp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gulp&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> gulpReplace <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gulp-replace&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">&#39;replace-hash&#39;</span><span class="token punctuation">,</span> <span class="token parameter">cb</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;../dist/**/*.*&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">gulpReplace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">__static_hash__</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;custom-hash&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">&#39;../dist/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> series<span class="token punctuation">,</span> parallel <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gulp&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u7D66\u5B9A\u4E00\u500B\u4EFB\u52D9</span>
gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">&#39;{task1}&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">cb</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4EFB\u52D9\u5167\u5BB9</span>
  <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u591A\u4EFB\u52D9\u57F7\u884C</span>
gulp<span class="token punctuation">.</span><span class="token function">serie</span><span class="token punctuation">(</span><span class="token string">&#39;task1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;task2&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u7D44\u5408\u4F7F\u7528(\u5728package.json\u6307\u5B9Agulp &#39;\u4F60\u7684\u4EFB\u52D9\u540D\u7A31&#39;)</span>
gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span>
  <span class="token string">&#39;build&#39;</span><span class="token punctuation">,</span>
  gulp<span class="token punctuation">.</span><span class="token function">series</span><span class="token punctuation">(</span><span class="token string">&#39;task1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;task2&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="\u53C3\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C3\u8003" aria-hidden="true">#</a> \u53C3\u8003</h3>`,5),_={href:"https://kim85326.github.io/2019/06/30/gulp-%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98/",target:"_blank",rel:"noopener noreferrer"},f=s("gulp \u5B78\u7FD2\u7B46\u8A18"),x={href:"https://awdr74100.github.io/2020-01-28-gulp-upgradegulp/",target:"_blank",rel:"noopener noreferrer"},v=s("Gulp \u524D\u7AEF\u81EA\u52D5\u5316 - \u5347\u7D1A\u81F3 Gulp 4 \u5B8C\u6574\u8AAA\u660E"),w={href:"https://hoyis-note.coderbridge.io/2021/08/12/Gulp-%E8%88%87-Webpack/",target:"_blank",rel:"noopener noreferrer"},j=s("Gulp & Webpack \u57FA\u672C\u6982\u5FF5");function E(S,q){const a=t("ExternalLinkIcon");return o(),c(l,null,[r,n("ul",null,[n("li",null,[n("a",k,[d,e(a)]),g]),n("li",null,[n("a",b,[h,e(a)])])]),m,n("ul",null,[n("li",null,[n("a",_,[f,e(a)])]),n("li",null,[n("a",x,[v,e(a)])]),n("li",null,[n("a",w,[j,e(a)])])])],64)}var A=u(i,[["render",E]]);export{A as default};
