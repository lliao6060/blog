import{i as t,o,c as r,a as n,k as a,F as l,g as p,b as e}from"./app.5afaceae.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=p('<h1 id="vue-cli4-ts-iview\u914D\u7F6E\u53C3\u8003" tabindex="-1"><a class="header-anchor" href="#vue-cli4-ts-iview\u914D\u7F6E\u53C3\u8003" aria-hidden="true">#</a> Vue cli4 + ts + iview\u914D\u7F6E\u53C3\u8003</h1><h6 id="tags-vue-iview-ui-framework" tabindex="-1"><a class="header-anchor" href="#tags-vue-iview-ui-framework" aria-hidden="true">#</a> tags: <code>vue</code> <code>iview</code> <code>ui-framework</code></h6><h3 id="\u53C3\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C3\u8003" aria-hidden="true">#</a> \u53C3\u8003</h3>',3),k={href:"https://blog.csdn.net/u013843183/article/details/80455373",target:"_blank",rel:"noopener noreferrer"},b=e("webpack+vue+ts project\u4E2D\u5F15\u5165iview"),d={href:"https://zeng-cy.blog.csdn.net/article/details/103169596?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2.no_search_link",target:"_blank",rel:"noopener noreferrer"},m=e("\u600E\u4E48\u89E3\u51B3iview\u7684\u6837\u5F0F\u8986\u76D6\u95EE\u9898\uFF1F"),g=p(`<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> install</h2><ol><li>first install</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm isntall iview --dave-dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>install <code>iview-loader</code></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install iview-loader --dave-dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>edit <code>vue.config.js</code></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span><span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token string">&quot;defaults&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.s?css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          CssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span> <span class="token comment">//\u62BD\u53D6.vue\u6A94\u88E1\u7684css\u8B8A\u6210\u7368\u7ACB\u4E00\u96BB\u6A94\u6848</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">esModule</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;sass-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;vue-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;iview-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token boolean">false</span>
              <span class="token comment">// false\u6642\u53EF\u4EE5\u4F7F\u7528&lt;Row&gt;&lt;/Row&gt;\u5927\u5BEB\u6A19\u7C64, \u4E0D\u9808\u524D\u8D05\u8A5E</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpe?g|gif|svg)(\\?.*)?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
          <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;images&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><ol start="4"><li>\u5728\u6839\u76EE\u9304\u65B0\u589E<code>declaration.d</code></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>declare module <span class="token string">&#39;iview&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">iview</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> iview<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>5.\u5728<code>main.ts</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;iview/dist/styles/iview.css&#39;</span>
<span class="token keyword">import</span> iview <span class="token keyword">from</span> <span class="token string">&#39;iview&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>iview<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5C31\u53EF\u4EE5\u958B\u5FC3\u4F7F\u7528\u4E86</p><h4 id="\u4F7F\u7528webpack\u8986\u84CB\u6A23\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528webpack\u8986\u84CB\u6A23\u5F0F" aria-hidden="true">#</a> \u4F7F\u7528webpack\u8986\u84CB\u6A23\u5F0F</h4><p>\u5728vue\u4E2D\u4F7F\u7528iview\u7D44\u4EF6\u5EAB\u7D93\u5E38\u767C\u73FE\u81EA\u5DF1\u5BEB\u7684\u6A23\u5F0F\u6C92\u6709\u751F\u6548\uFF0C\u88ABiview\u8986\u84CB</p><ol><li>\u6211\u5011\u8981\u628A\u6A23\u5F0F\u5BEB\u5728scss\u4E2D\uFF0C\u4E26\u4E14\u53BB\u6389scoped\u3002</li><li>\u52A0\u4E0A\u591A\u5C64div,\u9632\u6B62\u51FA\u73FE\u8986\u84CB\u5176\u4ED6\u9801\u9762\u6A23\u5F0F\u7684\u554F\u984C\u3002</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span><span class="token operator">&gt;</span>
  <span class="token punctuation">.</span>test<span class="token operator">-</span>wrapper <span class="token punctuation">{</span>
    <span class="token punctuation">.</span>test<span class="token operator">-</span>inner <span class="token punctuation">{</span>
      <span class="token punctuation">.</span>ivu<span class="token operator">-</span>card<span class="token operator">-</span>body <span class="token punctuation">{</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> 15px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u554F\u984C" tabindex="-1"><a class="header-anchor" href="#\u554F\u984C" aria-hidden="true">#</a> \u554F\u984C</h3><h4 id="table-render\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#table-render\u7528\u6CD5" aria-hidden="true">#</a> table render\u7528\u6CD5</h4>`,18),v={href:"https://segmentfault.com/q/1010000012529438",target:"_blank",rel:"noopener noreferrer"},h=e("iviewui \u8868\u683C\u4E2D\u4F7F\u7528 Dropdown \u65E0\u6CD5\u6E32\u67D3\u6B63\u5E38"),y={href:"https://developpaper.com/question/using-dropdown-in-iviewui-table-cannot-render-normally/",target:"_blank",rel:"noopener noreferrer"},_=e("Using dropdown in iviewui table cannot render normally"),x={href:"https://segmentfault.com/q/1010000012529438",target:"_blank",rel:"noopener noreferrer"},f=e("demo1"),w={href:"https://www.twblogs.net/a/5bd37ba12b717778ac205086",target:"_blank",rel:"noopener noreferrer"},j=e("demo2");function E(q,V){const s=t("ExternalLinkIcon");return o(),r(l,null,[u,n("ul",null,[n("li",null,[n("a",k,[b,a(s)])]),n("li",null,[n("a",d,[m,a(s)])])]),g,n("ul",null,[n("li",null,[n("a",v,[h,a(s)])]),n("li",null,[n("a",y,[_,a(s)])]),n("li",null,[n("a",x,[f,a(s)])]),n("li",null,[n("a",w,[j,a(s)])])])],64)}var I=c(i,[["render",E]]);export{I as default};