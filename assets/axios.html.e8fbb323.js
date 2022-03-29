import{b as p,o as t,c as e,a as n,g as o,F as c,f as s,e as l}from"./app.de4d12f1.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=n("h1",{id:"axios\u7B46\u8A18",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#axios\u7B46\u8A18","aria-hidden":"true"},"#"),s(" axios\u7B46\u8A18")],-1),k={href:"https://www.cnblogs.com/cckui/p/10444246.html",target:"_blank",rel:"noopener noreferrer"},b=s("axios\u5927\u5168"),m=l(`<ul><li>\u7D71\u4E00\u8655\u7406\uFF1A</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">getHistoryData</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/survey/list/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> data
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tableData <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>result
    <span class="token keyword">this</span><span class="token punctuation">.</span>totalData <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>count
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u6C42\u51FA\u9519\uFF01&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>\u4F7F\u7528 asyns/await \u5C07 axios \u7570\u6B65\u8ACB\u6C42\u540C\u6B65\u5316\uFF1A</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token function">getHistoryData</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/survey/list/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">params</span><span class="token operator">:</span> data
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tableData <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>result
    <span class="token keyword">this</span><span class="token punctuation">.</span>totalData <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>count
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u6C42\u51FA\u9519\uFF01&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>\u7576 axios \u8ACB\u6C42\u62FF\u5230\u7684\u6578\u64DA\u5728\u4E0D\u540C\u5834\u666F\u4E0B\u505A\u4E0D\u540C\u7684\u8655\u7406\u6642\uFF1A</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token keyword">async</span> <span class="token function">handleClick</span> <span class="token punctuation">(</span><span class="token parameter">tab</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> tab<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>formInline<span class="token punctuation">.</span>user<span class="token punctuation">,</span>
    <span class="token literal-property property">cid</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>formInline<span class="token punctuation">.</span>identity<span class="token punctuation">,</span>
    <span class="token literal-property property">start_time</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>formInline<span class="token punctuation">.</span>dateTime <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>formInline<span class="token punctuation">.</span>dateTime<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">end_time</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>formInline<span class="token punctuation">.</span>dateTime <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>formInline<span class="token punctuation">.</span>dateTime<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getHistoryData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token comment">// \u7B49\u62FF\u5230\u8FD4\u56DE\u6570\u636Eres\u540E\u518D\u8FDB\u884C\u5904\u7406</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tableData <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>result
    <span class="token keyword">this</span><span class="token punctuation">.</span>totalData <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>count
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u6C42\u51FA\u9519&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">// \u5C01\u88DDaxios\u8ACB\u6C42\uFF0C\u8FD4\u56DEpromise, \u7528\u65BC\u8ABF\u7528getHistoryData\u51FD\u6578\u5F8C\u4F5C\u4E0D\u540C\u8655\u7406</span>
<span class="token function">getHistoryData</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/survey/list/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">params</span><span class="token operator">:</span> data
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,6);function d(y,g){const a=p("ExternalLinkIcon");return t(),e(c,null,[i,n("ul",null,[n("li",null,[n("p",null,[n("a",k,[b,o(a)])]),m])])],64)}var w=u(r,[["render",d]]);export{w as default};