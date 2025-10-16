import{i as r,o,c,a as n,k as e,F as l,g as p,b as s}from"./app.f538ca93.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";const i={},b=p(`<h6 id="tags-docker" tabindex="-1"><a class="header-anchor" href="#tags-docker" aria-hidden="true">#</a> tags: <code>docker</code></h6><h1 id="docker\u7B46\u8A18" tabindex="-1"><a class="header-anchor" href="#docker\u7B46\u8A18" aria-hidden="true">#</a> docker\u7B46\u8A18</h1><h3 id="\u57FA\u672C\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u6307\u4EE4" aria-hidden="true">#</a> \u57FA\u672C\u6307\u4EE4</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code># \u5217\u51FA\u6240\u6709\u672C\u6A5Fdocker images
docker images

# \u5217\u51FA\u6B63\u5728\u904B\u884C\u4E2D\u7684images
docker ps

# \u67E5\u770B\u6240\u6709 <span class="token function">containers</span><span class="token punctuation">(</span>\u5305\u542B\u5DF2\u95DC\u9589<span class="token punctuation">)</span>
docker ps <span class="token operator">-</span>a

# \u79FB\u9664\u80CC\u666F\u6B63\u5728\u57F7\u884C\u7684container
docker rm <span class="token constant">CONTAINER</span>

# \u5220\u9664\u6240\u6709\u5DF2\u505C\u6B62\u7684\u5BB9\u5668
docker container prune

# \u5220\u9664\u6240\u6709\u672A\u4F7F\u7528\u7684\u955C\u50CF
docker image prune

# \u5220\u9664\u6240\u6709\u672A\u4F7F\u7528\u7684\u8D44\u6E90
docker system prune

# \u505C\u6B62\u6B63\u5728\u57F7\u884C\u7684
docker container ls 
docker rm <span class="token operator">-</span>f <span class="token operator">&lt;</span>container<span class="token operator">-</span>name<span class="token operator">&gt;</span>

# \u522A\u6389\u6307\u5B9Aimages
docker rmi docker <span class="token punctuation">[</span>image_id<span class="token punctuation">]</span>

# <span class="token operator">--</span>rm \u7576\u5BB9\u5668\u7D42\u6B62\u6642\u6703\u81EA\u52D5\u522A\u9664\uFF0C\u5F88\u65B9\u4FBF
docker run <span class="token operator">--</span>rm <span class="token operator">-</span>it <span class="token operator">-</span>p yourPort<span class="token operator">:</span>dockerPort imageName

# build <span class="token keyword">new</span> <span class="token class-name">image</span>
docker build <span class="token operator">-</span>t <span class="token operator">&lt;</span> <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">:</span><span class="token punctuation">[</span>tag<span class="token punctuation">]</span><span class="token punctuation">(</span>\u4E0D\u80FD\u5927\u5BEB<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token punctuation">.</span> <span class="token operator">&lt;</span>\u8DEF\u5F91<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h3 id="\u5275\u5EFAimage" tabindex="-1"><a class="header-anchor" href="#\u5275\u5EFAimage" aria-hidden="true">#</a> \u5275\u5EFAimage</h3>`,5),u=s("\u5148\u5275\u5EFA"),m=n("code",null,"Dockerfile",-1),d=s(" \u53EF\u4EE5\u53C3\u8003"),k={href:"https://v2.vuejs.org/v2/cookbook/dockerize-vuejs-app.html",target:"_blank",rel:"noopener noreferrer"},h=s("vue\u5B98\u65B9\u63D0\u4F9B\u7684\u6A21\u677F"),g=p(`<div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token comment"># \u6539\u6210\u4F60\u7684\u7248\u672C \u8A18\u5F97\u641C\u5C0Bslin\u7248\u672C(\u641C\u5C0Bdocker node)</span>
<span class="token comment"># \u9078\u64C7\u57FA\u790E\u93E1\u50CF\uFF08\u9078\u53D6\u5730\u57FA\uFF09</span>
<span class="token instruction"><span class="token keyword">FROM</span> node:lts-alpine</span>

<span class="token comment"># \u5982\u679C\u662Fprodction\u624D\u9700\u8981\u9019\u884C \u5426\u5247\u53EF\u522A\u6389</span>
<span class="token comment"># install simple http server for serving static content</span>
<span class="token instruction"><span class="token keyword">RUN</span> npm install -g http-server</span>

<span class="token comment"># make the &#39;app&#39; folder the current working directory</span>
<span class="token comment"># \u78BA\u5B9A\u5DE5\u4F5C\u76EE\u9304\uFF08\u9078\u64C7\u5728\u54EA\u500B\u623F\u9593\u5DE5\u4F5C\uFF09</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token comment"># copy both &#39;package.json&#39; and &#39;package-lock.json&#39; (if available)</span>
<span class="token comment"># \u8907\u88FD\u8A2D\u5B9A\u6A94\uFF08\u628A\u6750\u6599\u642C\u9032\u4F86\uFF09</span>
<span class="token instruction"><span class="token keyword">COPY</span> package*.json ./</span>

<span class="token comment"># \u53EF\u4EE5\u7528npm install \u6216 yarn</span>
<span class="token comment"># install project dependencies</span>
<span class="token comment"># \u5B89\u88DD\u4F9D\u8CF4\uFF08\u4F7F\u7528\u6750\u6599\u5EFA\u9020</span>
<span class="token instruction"><span class="token keyword">RUN</span> yarn</span>

<span class="token comment"># copy project files and folders to the current working directory (i.e. &#39;app&#39; folder)</span>
<span class="token comment"># \u8907\u88FD\u6240\u6709\u539F\u59CB\u78BC\uFF08\u642C\u5165\u5269\u9918\u6750\u6599\uFF09</span>
<span class="token instruction"><span class="token keyword">COPY</span> . .</span>

<span class="token comment"># \u5982\u679C\u662Fprodction\u624D\u9700\u8981\u9019\u884C \u5426\u5247\u53EF\u522A\u6389</span>
<span class="token comment"># build app for production with minification</span>
<span class="token instruction"><span class="token keyword">RUN</span> npm run build</span>

<span class="token comment"># \u8072\u660E\u7AEF\u53E3\uFF08\u958B\u500B\u7A97\u6236\uFF09</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 8080</span>

<span class="token comment"># \u5982\u679C\u662Fprodction\u624D\u9700\u8981\u9019\u884C \u8A18\u5F97\u662F\u9663\u5217\u5BEB\u6CD5</span>
<span class="token instruction"><span class="token keyword">CMD</span> [ <span class="token string">&quot;http-server&quot;</span>, <span class="token string">&quot;dist&quot;</span> ]</span>

<span class="token comment"># dev\u6A21\u5F0F \u8A18\u5F97\u4F60\u600E\u9EBC\u555F\u8D77\u4F86\u5C31\u8981\u600E\u9EBD\u5BEB</span>
<span class="token comment"># \u555F\u52D5\u6307\u4EE4\uFF08\u623F\u5B50\u600E\u9EBC\u7528\uFF09</span>
<span class="token instruction"><span class="token keyword">CMD</span> [ <span class="token string">&quot;yarn&quot;</span>, <span class="token string">&quot;dev&quot;</span> ] </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><ol start="2"><li>\u8F38\u5165<code>docker build -t \u5C08\u6848\u540D\u7A31 \u4E0D\u80FD\u5927\u5BEB \u8DEF\u5F91</code></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>docker build <span class="token operator">-</span>t my<span class="token operator">-</span>project <span class="token punctuation">.</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u555F\u8D77\u4F86" tabindex="-1"><a class="header-anchor" href="#\u555F\u8D77\u4F86" aria-hidden="true">#</a> \u555F\u8D77\u4F86</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>docker run <span class="token operator">-</span>it <span class="token operator">-</span>p yourPort<span class="token operator">:</span>dockerPort imageName

\u7BC4\u4F8B\uFF1A
docker run <span class="token operator">-</span>it <span class="token operator">-</span>p <span class="token number">8080</span><span class="token operator">:</span><span class="token number">8080</span> amago<span class="token operator">-</span>erp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u53C3\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C3\u8003" aria-hidden="true">#</a> \u53C3\u8003</h3>`,6),v={href:"https://juejin.cn/post/7455958928607477771",target:"_blank",rel:"noopener noreferrer"},_=s("\u4ECE\u5B89\u88C5\u5230\u4F1A\u7528\uFF0C\u66F4\u9002\u5408\u524D\u7AEF\u5B9D\u5B9D\u7684Docker\u6559\u7A0B");function f(y,j){const a=r("ExternalLinkIcon");return o(),c(l,null,[b,n("ol",null,[n("li",null,[u,m,d,n("a",k,[h,e(a)])])]),g,n("ul",null,[n("li",null,[n("a",v,[_,e(a)])])])],64)}var N=t(i,[["render",f]]);export{N as default};
