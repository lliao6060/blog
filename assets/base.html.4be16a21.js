import{i as r,o as p,c as o,a as n,k as c,F as t,g as a,b as s}from"./app.9850c375.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},d=a(`<h6 id="tags-docker" tabindex="-1"><a class="header-anchor" href="#tags-docker" aria-hidden="true">#</a> tags: <code>docker</code></h6><h1 id="docker\u7B46\u8A18" tabindex="-1"><a class="header-anchor" href="#docker\u7B46\u8A18" aria-hidden="true">#</a> docker\u7B46\u8A18</h1><h3 id="\u57FA\u672C\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u6307\u4EE4" aria-hidden="true">#</a> \u57FA\u672C\u6307\u4EE4</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>docker images \u5217\u51FA\u6240\u6709\u672C\u6A5Fdocker images

docker ps \u5217\u51FA\u6B63\u5728\u904B\u884C\u4E2D\u7684images
<span class="token comment">// \u67E5\u770B\u6240\u6709 containers(\u5305\u542B\u5DF2\u95DC\u9589)</span>
docker ps <span class="token operator">-</span>a

<span class="token comment">// \u79FB\u9664\u80CC\u666F\u6B63\u5728\u57F7\u884C\u7684container</span>
docker rm <span class="token constant">CONTAINER</span>

docker rmi docker id \u522A\u6389\u6307\u5B9Aimages

<span class="token comment">// --rm \u7576\u5BB9\u5668\u7D42\u6B62\u6642\u6703\u81EA\u52D5\u522A\u9664\uFF0C\u5F88\u65B9\u4FBF</span>
docker run <span class="token operator">--</span>rm <span class="token operator">-</span>it <span class="token operator">-</span>p yourPort<span class="token operator">:</span>dockerPort imageName

docker build <span class="token operator">-</span>t \u5C08\u6848\u540D\u7A31 \u4E0D\u80FD\u5927\u5BEB \u8DEF\u5F91
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="\u5275\u5EFAimage" tabindex="-1"><a class="header-anchor" href="#\u5275\u5EFAimage" aria-hidden="true">#</a> \u5275\u5EFAimage</h3>`,5),m=s("\u5148\u5275\u5EFA"),b=n("code",null,"Dockerfile",-1),u=s(" \u53EF\u4EE5\u53C3\u8003"),k={href:"https://v2.vuejs.org/v2/cookbook/dockerize-vuejs-app.html",target:"_blank",rel:"noopener noreferrer"},h=s("vue\u5B98\u65B9\u63D0\u4F9B\u7684\u6A21\u677F"),g=a(`<div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token comment"># \u6539\u6210\u4F60\u7684\u7248\u672C \u8A18\u5F97\u641C\u5C0Bslin\u7248\u672C(\u641C\u5C0Bdocker node)</span>
<span class="token instruction"><span class="token keyword">FROM</span> node:lts-alpine</span>

<span class="token comment"># \u5982\u679C\u662Fprodction\u624D\u9700\u8981\u9019\u884C \u5426\u5247\u53EF\u522A\u6389</span>
<span class="token comment"># install simple http server for serving static content</span>
<span class="token instruction"><span class="token keyword">RUN</span> npm install -g http-server</span>

<span class="token comment"># make the &#39;app&#39; folder the current working directory</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token comment"># copy both &#39;package.json&#39; and &#39;package-lock.json&#39; (if available)</span>
<span class="token instruction"><span class="token keyword">COPY</span> package*.json ./</span>

<span class="token comment"># \u53EF\u4EE5\u7528npm install \u6216 yarn</span>
<span class="token comment"># install project dependencies</span>
<span class="token instruction"><span class="token keyword">RUN</span> yarn</span>

<span class="token comment"># copy project files and folders to the current working directory (i.e. &#39;app&#39; folder)</span>
<span class="token instruction"><span class="token keyword">COPY</span> . .</span>

<span class="token comment"># \u5982\u679C\u662Fprodction\u624D\u9700\u8981\u9019\u884C \u5426\u5247\u53EF\u522A\u6389</span>
<span class="token comment"># build app for production with minification</span>
<span class="token instruction"><span class="token keyword">RUN</span> npm run build</span>

<span class="token instruction"><span class="token keyword">EXPOSE</span> 8080</span>
<span class="token comment"># \u5982\u679C\u662Fprodction\u624D\u9700\u8981\u9019\u884C \u8A18\u5F97\u662F\u9663\u5217\u5BEB\u6CD5</span>
<span class="token instruction"><span class="token keyword">CMD</span> [ <span class="token string">&quot;http-server&quot;</span>, <span class="token string">&quot;dist&quot;</span> ]</span>

<span class="token comment"># dev\u6A21\u5F0F \u8A18\u5F97\u4F60\u600E\u9EBC\u555F\u8D77\u4F86\u5C31\u8981\u600E\u9EBD\u5BEB</span>
<span class="token instruction"><span class="token keyword">CMD</span> [ <span class="token string">&quot;yarn&quot;</span>, <span class="token string">&quot;dev&quot;</span> ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><ol start="2"><li>\u8F38\u5165<code>docker build -t \u5C08\u6848\u540D\u7A31 \u4E0D\u80FD\u5927\u5BEB \u8DEF\u5F91</code></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>docker build <span class="token operator">-</span>t my<span class="token operator">-</span>project <span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u555F\u8D77\u4F86" tabindex="-1"><a class="header-anchor" href="#\u555F\u8D77\u4F86" aria-hidden="true">#</a> \u555F\u8D77\u4F86</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>docker run <span class="token operator">-</span>it <span class="token operator">-</span>p yourPort<span class="token operator">:</span>dockerPort imageName

\u7BC4\u4F8B\uFF1A
docker run <span class="token operator">-</span>it <span class="token operator">-</span>p <span class="token number">8080</span><span class="token operator">:</span><span class="token number">8080</span> amago<span class="token operator">-</span>erp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,5);function v(_,f){const e=r("ExternalLinkIcon");return p(),o(t,null,[d,n("ol",null,[n("li",null,[m,b,u,n("a",k,[h,c(e)])])]),g],64)}var x=l(i,[["render",v]]);export{x as default};
