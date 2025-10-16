import{g as s}from"./app.8d45b3c7.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=s(`<h1 id="docker-shell-\u8173\u672C\u7BC4\u4F8B" tabindex="-1"><a class="header-anchor" href="#docker-shell-\u8173\u672C\u7BC4\u4F8B" aria-hidden="true">#</a> Docker Shell \u8173\u672C\u7BC4\u4F8B</h1><p>\u8B8A\u6578\u6839\u64DA\u516C\u53F8\u8A2D\u5B9A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">###</span>
 <span class="token comment"># @Author: lindy.liao@jingmi.com.tw </span>
 <span class="token comment"># @Date: 2025-06-18 09:01:24</span>
 <span class="token comment"># @LastEditTime: 2025-06-19 14:28:54</span>
 <span class="token comment"># @LastEditors: lindy.liao@jingmi.com.tw </span>
 <span class="token comment"># @Description: \u904B\u884C\u672C\u5730docker\u8173\u672C</span>
 <span class="token comment"># @FilePath: /cms-frontend/run-local.sh</span>
<span class="token comment">###</span>

<span class="token comment"># \u8981\u5148\u57F7\u884C chmod +x run-local.sh \u624D\u80FD\u57F7\u884C ./run-local.sh </span>

<span class="token comment">#!/bin/bash</span>

<span class="token comment"># \u8A2D\u5B9A\u6620\u50CF\u540D\u7A31</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">IMAGE_NAME</span><span class="token operator">=</span><span class="token string">&#39;test-cms-frontend-build&#39;</span>

<span class="token comment"># \u8A2D\u5B9A\u5FC5\u8981\u7684\u74B0\u5883\u8B8A\u6578</span>

<span class="token comment"># \u9700\u8981\u624B\u52D5\u8A2D\u5B9A\uFF0C\u56E0\u70BA\u9019\u662F\u672C\u5730\u958B\u767C\u74B0\u5883\u7684 API URL\uFF0C\u5373\u4F7F\u6210\u529F\u555F\u52D5 server \u4E5F\u6C92\u8FA6\u6CD5\u53D6\u5F97 API \u8CC7\u6599</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">VITE_CMS_API_BASE_URL</span><span class="token operator">=</span><span class="token string">&quot;https://cms-api.dev.bobateach.net&quot;</span>
<span class="token comment"># \u9700\u624B\u52D5\u8A2D\u5B9A\uFF0C\u6C92\u8A2D\u5B9A\u5C31\u6703\u5674 nginx \u932F\u8AA4</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CACHE_CONTROL</span><span class="token operator">=</span><span class="token string">&quot;max-age=86400&quot;</span>

<span class="token comment"># \u986F\u793A\u74B0\u5883\u8B8A\u6578</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;=== \u74B0\u5883\u8B8A\u6578\u8A2D\u5B9A ===&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;IMAGE_NAME: <span class="token variable">$IMAGE_NAME</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;VITE_CMS_API_BASE_URL: <span class="token variable">$VITE_CMS_API_BASE_URL</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;CACHE_CONTROL: <span class="token variable">$CACHE_CONTROL</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;===================&quot;</span>

<span class="token comment"># \u5EFA\u7F6E Docker \u6620\u50CF</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u958B\u59CB\u5EFA\u7F6E Docker \u6620\u50CF...&quot;</span>
<span class="token function">docker</span> build <span class="token punctuation">\\</span>
  --progress<span class="token operator">=</span>plain <span class="token punctuation">\\</span>
  --build-arg <span class="token assign-left variable">VITE_CMS_API_BASE_URL</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$VITE_CMS_API_BASE_URL</span>&quot;</span> <span class="token punctuation">\\</span>
  --build-arg <span class="token assign-left variable">CACHE_CONTROL</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$CACHE_CONTROL</span>&quot;</span> <span class="token punctuation">\\</span>
  -t <span class="token variable">$IMAGE_NAME</span> <span class="token builtin class-name">.</span>

<span class="token comment"># \u6AA2\u67E5\u5EFA\u7F6E\u662F\u5426\u6210\u529F</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Docker \u6620\u50CF\u5EFA\u7F6E\u6210\u529F\uFF01&quot;</span>
    
    <span class="token comment"># \u505C\u6B62\u4E26\u79FB\u9664\u820A\u7684\u5BB9\u5668\uFF08\u5982\u679C\u5B58\u5728\uFF09</span>
    <span class="token function">docker</span> stop <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> -q -f <span class="token assign-left variable">ancestor</span><span class="token operator">=</span>$IMAGE_NAME<span class="token variable">)</span></span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null
    <span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> -a -q -f <span class="token assign-left variable">ancestor</span><span class="token operator">=</span>$IMAGE_NAME<span class="token variable">)</span></span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null
    
    <span class="token comment"># \u904B\u884C\u65B0\u7684\u5BB9\u5668</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u555F\u52D5\u5BB9\u5668...&quot;</span>
    <span class="token function">docker</span> run --rm -it <span class="token punctuation">\\</span>
        -p <span class="token number">5173</span>:80 <span class="token punctuation">\\</span>
        <span class="token variable">$IMAGE_NAME</span>

    <span class="token comment"># \u6AA2\u67E5\u5BB9\u5668\u65E5\u8A8C</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5BB9\u5668\u65E5\u8A8C\uFF1A&quot;</span>
    <span class="token function">docker</span> logs <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> -q -f <span class="token assign-left variable">ancestor</span><span class="token operator">=</span>$IMAGE_NAME<span class="token variable">)</span></span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Docker \u6620\u50CF\u5EFA\u7F6E\u5931\u6557\uFF01&quot;</span>
    <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div>`,3);function p(l,t){return e}var r=n(a,[["render",p]]);export{r as default};
