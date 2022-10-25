import{i as t,o,c as r,a as n,k as p,F as l,g as e,b as s}from"./app.5ecb0f1f.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=e('<h1 id="nuxt2\u914D\u7F6E\u5165\u9580" tabindex="-1"><a class="header-anchor" href="#nuxt2\u914D\u7F6E\u5165\u9580" aria-hidden="true">#</a> Nuxt2\u914D\u7F6E\u5165\u9580</h1><h6 id="tags-nuxt-nuxt2" tabindex="-1"><a class="header-anchor" href="#tags-nuxt-nuxt2" aria-hidden="true">#</a> tags: <code>Nuxt</code>, <code>Nuxt2</code></h6><blockquote><p>\u9019\u662F\u5F9E0\u958B\u59CB\u81EA\u5DF1\u642D\u5EFA\u7684\u57FA\u672C\u914D\u7F6E\u8A73\u89E3</p></blockquote><h3 id="\u91CD\u9EDE" tabindex="-1"><a class="header-anchor" href="#\u91CD\u9EDE" aria-hidden="true">#</a> \u91CD\u9EDE</h3>',4),k=s("\u53EF\u4EE5\u900F\u904E\u5B89\u88DD"),b={href:"https://composition-api.nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"},d=s("@nuxtjs/composition-api"),m=e("\u4F86\u652F\u63F4<code>vue3</code>\u7684<code>setup</code>\u8A9E\u6CD5(<code>vue2</code>\u5BEB\u6CD5\u4E5F\u517C\u5BB9) <ul><li>\u9700\u8981\u8A2D\u7F6E<code>meta</code>\u7684\u5EFA\u8B70\u5BEB<code>vue2</code>\u5BEB\u6CD5\u6216\u8005<code>composition-api</code>\u5BEB\u6CD5\u8F03\u597D\u8A2D\u7F6E</li><li>\u4E0D\u9700\u8A2D\u7F6E<code>meta</code>\u7684\u7D44\u4EF6\u5EFA\u8B70\u76F4\u4E0A<code>script setup</code>\u5BEB\u6CD5</li></ul>",8),g=n("li",null,[s("\u53EF\u4EE5\u900F\u904E\u5728"),n("code",null,"nuxt.config.js"),s("\u88E1\u8A2D\u7F6E"),n("code",null,"components: true"),s("\u81EA\u52D5\u5168\u5C40\u8A3B\u518A\u7D44\u4EF6\u4E0D\u9700\u53E6\u5916\u5F15\u5165("),n("strong",null,"\u5728\u7D44\u4EF6\u6839\u76EE\u9304\u624D\u884C"),s(")")],-1),h=e(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>components
 | Navbar.vue // \u9019\u53EF\u4EE5\u88AB\u5075\u6E2C\u5230
 | navbar
   | MenuList.vue // \u9019\u5C31\u8981\u81EA\u5DF1\u5F15\u5165
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,1),y={start:"3"},v=s("\u53EF\u4EE5\u900F\u904E\u5B89\u88DD"),x={href:"https://github.com/antfu/unplugin-auto-import",target:"_blank",rel:"noopener noreferrer"},_=s("unplugin-auto-import"),f=s("\u4F86\u81EA\u52D5\u8A3B\u518A"),j=n("code",null,"vue",-1),w=s("\u3001"),q=n("code",null,"pinia",-1),C=s("\u7B49\u7B49\u7684\u65B9\u6CD5("),L=n("code",null,"Nuxt3\u4E0D\u9700\u914D\u7F6E",-1),S=s(")"),N=e(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yarn add unplugin-auto-import
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// in nuxt.config.js</span>

<span class="token comment">// \u81EA\u52D5\u5C0E\u5165</span>
<span class="token keyword">const</span> autoImportOpts <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;pinia&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dts</span><span class="token operator">:</span> <span class="token string">&#39;./auto-imports.d.ts&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>\u7565
  <span class="token literal-property property">buildModules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;unplugin-auto-import/nuxt&#39;</span><span class="token punctuation">,</span> autoImportOpts<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="\u5275\u5EFA\u5C08\u6848" tabindex="-1"><a class="header-anchor" href="#\u5275\u5EFA\u5C08\u6848" aria-hidden="true">#</a> \u5275\u5EFA\u5C08\u6848</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npx create<span class="token operator">-</span>nuxt<span class="token operator">-</span>app <span class="token operator">&lt;</span>project<span class="token operator">-</span>name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u914D\u7F6Esass" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Esass" aria-hidden="true">#</a> \u914D\u7F6E<code>sass</code></h3><ol><li><code>Sass</code> \u652F\u63F4</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev sass sass<span class="token operator">-</span>loader
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,7),E={start:"2"},M=s("\u5B89\u88DD"),$={href:"https://github.com/nuxt-community/style-resources-module",target:"_blank",rel:"noopener noreferrer"},B=s("style-resource plugin"),A=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev @nuxtjs<span class="token operator">/</span>style<span class="token operator">-</span>resources
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li><code>nuxt.config.js</code> \u7DE8\u8F2F</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... \u7565\u904E ...</span>

  <span class="token comment">/*
  ** Nuxt.js dev-modules
  */</span>
  <span class="token literal-property property">buildModules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;@nuxtjs/style-resources&#39;</span> <span class="token comment">// \u4E3B\u8981\u662F\u9019\u500B\uFF0C\u8981\u52A0\u5165 style-resources</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/*
  ** \u9019\u908A\u662F\u8981\u81EA\u5DF1\u624B\u52D5\u65B0\u52A0\u5165\u7684\u4F4D\u7F6E
  ** \u6A23\u5F0F\u8CC7\u6E90\u4F4D\u7F6E
  */</span>
  <span class="token literal-property property">styleResources</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">scss</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;./assets/scss/*.scss&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// Global CSS: https://go.nuxtjs.dev/config-css</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// SCSS file in the project</span>
    <span class="token string">&#39;@/assets/scss/app.scss&#39;</span> <span class="token comment">//\u5168\u5C40\u6A23\u5F0F</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// ... \u7565\u904E ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u9019\u6A23\u5168\u5C40\u6A23\u5F0F\u90FD\u53EF\u4EE5\u7528\u4E86</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">&lt;style lang=&quot;scss&quot; scoped&gt;
  .test</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token atrule"><span class="token rule">@include</span> flex<span class="token punctuation">;</span></span>
  <span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,5),T={id:"\u914D\u7F6Elayout",tabindex:"-1"},I=n("a",{class:"header-anchor",href:"#\u914D\u7F6Elayout","aria-hidden":"true"},"#",-1),z=s(),D={href:"https://nuxtjs.org/docs/directory-structure/layouts/",target:"_blank",rel:"noopener noreferrer"},R=s("\u914D\u7F6Elayout"),F=e(`<p>\u8DDF<code>Nuxt3</code>\u76F8\u6BD4\uFF0C\u4E0D\u9700\u8981<code>slot</code>\u4E5F\u4E0D\u9808\u7528<code>NuxtLayout</code>\u5305\u8D77\u4F86\uFF0C\u9810\u8A2D\u9801\u9762\u6703\u4F7F\u7528<code>default</code>\uFF0C\u9700\u8981\u66F4\u6539\u5247\u9700\u8981\u900F\u904E<code>layout</code>\u53BB\u505A\u6307\u5B9A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>// in layouts/default.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default-layout<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Navbar</span> <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Nuxt</span> <span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Footer</span> <span class="token punctuation">/&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6307\u5B9Alayout</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token string">&#39;blog&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// OR</span>
  <span class="token function">layout</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;blog&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,3),O={id:"\u914D\u7F6Ei18n",tabindex:"-1"},U=n("a",{class:"header-anchor",href:"#\u914D\u7F6Ei18n","aria-hidden":"true"},"#",-1),V=s(),W={href:"https://i18n.nuxtjs.org/setup",target:"_blank",rel:"noopener noreferrer"},P=s("\u914D\u7F6Ei18n"),G=e(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yarn add @nuxtjs/i18n
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// in nuxt.config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> i18nConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./src/plugins/i18n&#39;</span><span class="token punctuation">;</span>

<span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string">&#39;@nuxtjs/i18n&#39;</span><span class="token punctuation">,</span>i18nConfig<span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&#39;~/plugins/i18n.js&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token literal-property property">i18n</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">strategy</span><span class="token operator">:</span> <span class="token string">&#39;prefix_except_default&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">defaultLocale</span><span class="token operator">:</span> <span class="token string">&#39;tw&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">iso</span><span class="token operator">:</span> <span class="token string">&#39;en_US&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">&#39;en_US&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;tw&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">iso</span><span class="token operator">:</span> <span class="token string">&#39;zh_TW&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">&#39;zh-TW&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// in plugins/18n.js</span>
<span class="token keyword">import</span> en <span class="token keyword">from</span> <span class="token string">&#39;../lang/en-US.js&#39;</span>
<span class="token keyword">import</span> tw <span class="token keyword">from</span> <span class="token string">&#39;../lang/zh-TW.js&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> i18nConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">iso</span><span class="token operator">:</span> <span class="token string">&#39;en-US&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;English&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">flag</span><span class="token operator">:</span> <span class="token string">&#39;openmoji:flag-us-outlying-islands&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;tw&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">iso</span><span class="token operator">:</span> <span class="token string">&#39;zh-TW&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u4E2D\u6587&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">flag</span><span class="token operator">:</span> <span class="token string">&#39;emojione-v1:flag-for-taiwan&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">defaultLocale</span><span class="token operator">:</span> <span class="token string">&#39;tw&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">vueI18n</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">fallbackLocale</span><span class="token operator">:</span> <span class="token string">&#39;tw&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">{</span> en<span class="token punctuation">,</span> tw <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h4 id="\u8A9E\u8A00\u5207\u63DB" tabindex="-1"><a class="header-anchor" href="#\u8A9E\u8A00\u5207\u63DB" aria-hidden="true">#</a> \u8A9E\u8A00\u5207\u63DB</h4><blockquote><p>\u9019\u584A\u641E\u8D85\u4E45...\u5176\u5BE6\u5F88\u7C21\u55AE\u53EA\u662F\u4E00\u76F4\u6B7B\u80E1\u540COrz</p></blockquote><ul><li>\u8FF4\u5708\u76F4\u63A5\u7528<code>$i18n.locales</code>\u8DD1\u5373\u53EF</li><li>\u4F7F\u7528<code>switchLocalePath(locale.code)</code>\u505A\u5207\u63DB</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// LanguageChange.vue</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;LanguageChange&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">showLangMenu</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">toggleLangMenu</span><span class="token punctuation">(</span><span class="token parameter">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>bool<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>showLangMenu <span class="token operator">=</span> bool
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>showLangMenu <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>showLangMenu
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;flex-center&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div
      <span class="token keyword">class</span><span class="token operator">=</span>&quot;
        lang<span class="token operator">-</span>droupdown
        flex
        h<span class="token operator">-</span><span class="token number">10</span>
        w<span class="token operator">-</span><span class="token number">10</span>
        items<span class="token operator">-</span>center
        justify<span class="token operator">-</span>center
        rounded<span class="token operator">-</span>lg
        cursor<span class="token operator">-</span>pointer
      &quot;
      @click<span class="token operator">=</span><span class="token string">&quot;showLangMenu = !showLangMenu&quot;</span>
    <span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>iconify<span class="token operator">-</span>icon
        icon<span class="token operator">=</span><span class="token string">&quot;fa6-solid:language&quot;</span>
        <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;text-white&quot;</span>
        style<span class="token operator">=</span><span class="token string">&quot;font-size: 30px&quot;</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>div
        v<span class="token operator">-</span>show<span class="token operator">=</span><span class="token string">&quot;showLangMenu&quot;</span>
        <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;lang-droupdown__menu w-4/5&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>nuxt<span class="token operator">-</span>link
          v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(locale, i) in $i18n.locales&quot;</span>
          <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;\`\${locale.code}-\${i}\`&quot;</span>
          <span class="token keyword">class</span><span class="token operator">=</span>&quot;
            flex
            justify<span class="token operator">-</span>between
            py<span class="token operator">-</span><span class="token number">2</span>
            px<span class="token operator">-</span><span class="token number">4</span>
            cursor<span class="token operator">-</span>pointer
          &quot;
          <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span>&quot;<span class="token punctuation">{</span>
            <span class="token string-property property">&#39;text-white bg-gray-600 dark:bg-sky-600&#39;</span><span class="token operator">:</span>
            $i18n<span class="token punctuation">.</span>locale <span class="token operator">===</span> locale<span class="token punctuation">.</span>code<span class="token punctuation">,</span>
            <span class="token string-property property">&#39;bg-gray-300 dark:bg-gray-600 hover:bg-gray-500 hover:text-white&#39;</span><span class="token operator">:</span>
            $i18n<span class="token punctuation">.</span>locale <span class="token operator">!==</span> locale<span class="token punctuation">.</span>code<span class="token punctuation">,</span>
          <span class="token punctuation">}</span>&quot;
          <span class="token operator">:</span>to<span class="token operator">=</span><span class="token string">&quot;switchLocalePath(locale.code)&quot;</span>
        <span class="token operator">&gt;</span>
          <span class="token punctuation">{</span><span class="token punctuation">{</span> locale<span class="token punctuation">.</span>name <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span>&quot;
            flex
            items<span class="token operator">-</span>center
            justify<span class="token operator">-</span>center
            text<span class="token operator">-</span>sm
          &quot;
          <span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>iconify<span class="token operator">-</span>icon
              <span class="token operator">:</span>icon<span class="token operator">=</span><span class="token string">&quot;locale.flag&quot;</span>
              <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;text-base&quot;</span>
            <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>nuxt<span class="token operator">-</span>link<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>
<span class="token punctuation">.</span>lang<span class="token operator">-</span>droupdown <span class="token punctuation">{</span>
  <span class="token operator">&amp;</span>__menu <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 150px<span class="token punctuation">;</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> 6vh<span class="token punctuation">;</span>
    <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">12.5</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br></div></div>`,7),H={id:"\u914D\u7F6Epinia",tabindex:"-1"},J=n("a",{class:"header-anchor",href:"#\u914D\u7F6Epinia","aria-hidden":"true"},"#",-1),X=s(),K={href:"https://pinia.vuejs.org/ssr/nuxt.html#auto-imports",target:"_blank",rel:"noopener noreferrer"},Q=s("\u914D\u7F6Epinia"),Y=e(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yarn add pinia @pinia/nuxt@0.2.1 @nuxtjs/composition-api
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// in nuxt.config.js</span>
<span class="token literal-property property">buildModules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token comment">// Nuxt 2 only:</span>
  <span class="token comment">// https://composition-api.nuxtjs.org/getting-started/setup#quick-start</span>
  <span class="token string">&#39;@nuxtjs/composition-api/module&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;@pinia/nuxt&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;align-center&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;title text-2xl&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token function">$t</span><span class="token punctuation">(</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> appStore<span class="token punctuation">.</span>test <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useAppStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/store/app&#39;</span>
<span class="token keyword">const</span> appStore <span class="token operator">=</span> <span class="token function">useAppStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,3),Z={id:"\u914D\u7F6Etailwindcss-color-mode",tabindex:"-1"},nn=n("a",{class:"header-anchor",href:"#\u914D\u7F6Etailwindcss-color-mode","aria-hidden":"true"},"#",-1),sn=s(" \u914D\u7F6E"),an={href:"https://tailwindcss.nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"},pn=s("tailwindcss"),en=s(" & "),tn={href:"https://color-mode.nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"},on=s("color-mode"),rn=e(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> yarn add @nuxtjs/color-mode @nuxtjs/tailwindcss
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// in nuxt.config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;universal&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">buildModules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;@nuxtjs/tailwindcss&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;@nuxtjs/color-mode&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">tailwindcss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">jit</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// add &#39;~tailwind.config\` alias</span>
    <span class="token literal-property property">exposeConfig</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">colorMode</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">classSuffix</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// in tailwind.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">darkMode</span><span class="token operator">:</span> <span class="token string">&quot;class&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">variants</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;dark&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;dark-hover&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;dark-group-hover&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;dark-even&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;dark-odd&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;dark&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dark-focus&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dark-focus-within&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">textColor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;dark&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dark-hover&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dark-active&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// in ThemeChange.vue</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ThemeChange&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$colorMode<span class="token punctuation">.</span>preference <span class="token operator">=</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$colorMode<span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token string">&quot;light&quot;</span> <span class="token operator">?</span> <span class="token string">&quot;dark&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;light&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
<span class="token operator">...</span><span class="token punctuation">.</span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;toggle&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,4),ln={id:"\u914D\u7F6Eaxios",tabindex:"-1"},cn=n("a",{class:"header-anchor",href:"#\u914D\u7F6Eaxios","aria-hidden":"true"},"#",-1),un=s(),kn={href:"https://axios.nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"},bn=s("\u914D\u7F6Eaxios"),dn=e(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yarn add @nuxtjs/axios
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// in nuxt.config.js</span>
 <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;@nuxtjs/axios&#39;</span><span class="token punctuation">,</span>
 <span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;~/plugins/axios.js&#39;</span><span class="token punctuation">,</span>
 <span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token literal-property property">axios</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;/api/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://127.0.0.1:3000/api&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u76EE\u6A19ip</span>
     <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token string-property property">&#39;^/api/&#39;</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="\u914D\u7F6Eplugins-axios-js" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Eplugins-axios-js" aria-hidden="true">#</a> \u914D\u7F6E<code>plugins/axios.js</code></h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> $axios <span class="token punctuation">}</span><span class="token punctuation">,</span> inject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Create a custom axios instance</span>
  <span class="token keyword">const</span> api <span class="token operator">=</span> $axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">transformResponse</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> data <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// api\u56DE\u50B3\u6703\u662F\u5B57\u4E32\uFF0C\u6545\u8981\u518D\u8F49\u4E00\u4E0B</span>
          data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> data<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Inject to context as $api</span>
  <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;api&#39;</span><span class="token punctuation">,</span> api<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F:</h4><ol><li>\u5982\u679C\u662Fvue2\u5BEB\u6CD5\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 <code>this.$api.$get</code> or <code>this.$api.$post</code></li><li>vue3\u7684<code>script setup</code>\u5BEB\u6CD5\u5982\u4E0B</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nuxtjs/composition-api&#39;</span> <span class="token comment">// \u5982\u679C\u6709\u8A2D\u5B9Aauto import\u5247\u7701\u7565</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> proxy <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getApi</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> proxy<span class="token punctuation">.</span>$api<span class="token punctuation">.</span><span class="token function">$get</span><span class="token punctuation">(</span><span class="token string">&#39;https://jsonplaceholder.typicode.com/users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token function">getApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,7),mn={id:"\u914D\u7F6Eremockjs",tabindex:"-1"},gn=n("a",{class:"header-anchor",href:"#\u914D\u7F6Eremockjs","aria-hidden":"true"},"#",-1),hn=s(),yn={href:"https://www.npmjs.com/package/remockjs",target:"_blank",rel:"noopener noreferrer"},vn=s("\u914D\u7F6Eremockjs"),xn=e(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yarn add remockjs
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u6CE8\u610F-1" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F-1" aria-hidden="true">#</a> \u6CE8\u610F:</h4><ol><li>nodejs\u74B0\u5883\u4E0B\u4E0D\u8981\u5F15\u5165<code>mockXHR</code>\u548C<code>mockRequest</code></li><li><code>mockRequest</code>\u5FC5\u9808\u5728<code>client side</code>\u547C\u53EB\uFF0C\u4F46\u662F<code>Nuxt</code>\u6703\u5728<code>nodejs server side</code>\u8DD1\uFF0C\u6240\u4EE5\u6703\u5674\u9019\u500B\u932F</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>TypeError: request.upload.addEventListener is not a function
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>\u76F4\u63A5\u7528<code>mock(schema)</code>(\u7522\u751F\u5047\u8CC7\u6599\u7684\u51FD\u6578)\u5373\u53EF\u3002</li></ol><h4 id="\u914D\u7F6Eplugins-remock-js" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Eplugins-remock-js" aria-hidden="true">#</a> \u914D\u7F6E<code>plugins/remock.js</code></h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// in plugins/remockjs</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mock <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;remockjs&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> timeout <span class="token operator">=</span> <span class="token number">1500</span>
<span class="token keyword">const</span> userList <span class="token operator">=</span> <span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string-property property">&#39;list|10-15&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token string-property property">&#39;id|+1&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;@name(&quot;tw&quot;)&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">profession</span><span class="token operator">:</span> <span class="token string">&#39;@word(&quot;tw&quot;, 3, 5)&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;@email(&quot;gmail.com&quot;, 8, 12)&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">avatar</span><span class="token operator">:</span> <span class="token string">&#39;image(&quot;50x50&quot;, @color(), &quot;#22222&quot;)&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">mockUserList</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>userList<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> timeout<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// in nuxt.config.js</span>
 <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&#39;~/plugins/remock.js&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;client&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u6709\u53EF\u80FD\u6703\u9047\u5230\u7684\u932F\u8AA4" tabindex="-1"><a class="header-anchor" href="#\u6709\u53EF\u80FD\u6703\u9047\u5230\u7684\u932F\u8AA4" aria-hidden="true">#</a> \u6709\u53EF\u80FD\u6703\u9047\u5230\u7684\u932F\u8AA4</h3>`,9),_n={href:"https://stackoverflow.com/questions/65519568/cannot-find-module-caniuse-lite-dist-unpacker-agents-when-running-create-react",target:"_blank",rel:"noopener noreferrer"},fn=s("\u9047\u5230"),jn=n("code",null,"Cannot find module 'caniuse-lite/data/features/css-unicode-bidi'",-1),wn=e(`<ul><li>\u89E3\u6CD5:</li></ul><div class="language-javaScript ext-javaScript line-numbers-mode"><pre class="language-javaScript"><code>  npm i caniuse-lite@1.0.30001281
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u9047\u5230<code>\u9047\u5230 Module build failed (from ./node_modules/sass-loader/dist/cjs.js)(\u7248\u672C\u904E\u9AD8)</code></li></ol>`,3),qn={href:"https://stackoverflow.com/questions/68728903/how-to-setup-sass-scss-sass-loader-in-nuxt",target:"_blank",rel:"noopener noreferrer"},Cn=s("\u89E3\u6CD5"),Ln=e(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yarn add -D sass sass-loader@10.1.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javaScript ext-javaScript line-numbers-mode"><pre class="language-javaScript"><code>  // in nuxt.config.js
  export default {
    build: {
      loaders: {
        sass: {
          implementation: require(&#39;sass&#39;),
        },
        scss: {
          implementation: require(&#39;sass&#39;),
        },
      },
    }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="nuxt2-vs-nuxt3" tabindex="-1"><a class="header-anchor" href="#nuxt2-vs-nuxt3" aria-hidden="true">#</a> Nuxt2 vs Nuxt3</h3><ol><li>\u6700\u5927\u5DEE\u5225\u5C31\u662F<code>Nuxt3</code>\u6C92\u6709\u4E0B\u9762\u9019\u689D\u4E86\u2193\u3000\uFF08\u56E0\u70BA<code>vite</code>\u539F\u751F\u7528\u700F\u89BD\u5668\u7684server\u529F\u80FD\uFF09 <img src="https://i.imgur.com/WjCc2rb.png" alt=""></li><li>\u6574\u9AD4\u901F\u5EA6\u5FEB\u5F88\u591A</li></ol><h3 id="\u53C3\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C3\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C3\u8003\u6587\u7AE0</h3>`,5),Sn={href:"https://nuxtjs.org/docs/get-started/installation",target:"_blank",rel:"noopener noreferrer"},Nn=s("nuxt\u5B98\u7DB2"),En={href:"https://pinia.vuejs.org/ssr/nuxt.html#typescript",target:"_blank",rel:"noopener noreferrer"},Mn=s("pinia/nuxt"),$n={href:"https://tailwindcss.nuxtjs.org/examples/dark-mode/",target:"_blank",rel:"noopener noreferrer"},Bn=s("nuxt/tailwind"),An={href:"https://github.com/fayazara/nuxt-tailwind-darkmode",target:"_blank",rel:"noopener noreferrer"},Tn=s("fayazara/nuxt-tailwind-darkmode \u6A21\u677F"),In={href:"https://codesandbox.io/s/hk80sj?file=/pages/index.vue:275-288",target:"_blank",rel:"noopener noreferrer"},zn=s("nuxt2/client-example Codesandbox"),Dn={href:"https://penueling.com/%E7%B7%9A%E4%B8%8A%E5%AD%B8%E7%BF%92/vue3-%E4%BD%BF%E7%94%A8-getcurrentinstance-%E5%9C%A8-production-%E7%92%B0%E5%A2%83%E4%B8%AD%E4%B8%8D%E8%83%BD%E4%BD%BF%E7%94%A8-ctx/",target:"_blank",rel:"noopener noreferrer"},Rn=s("Vue3 \u4F7F\u7528 getCurrentInstance \u5728 production \u74B0\u5883\u4E2D\u4E0D\u80FD\u4F7F\u7528 ctx ?"),Fn=n("h3",{id:"\u6211\u81EA\u5DF1\u914D\u7F6E\u7684\u6A21\u677F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6211\u81EA\u5DF1\u914D\u7F6E\u7684\u6A21\u677F","aria-hidden":"true"},"#"),s(" \u6211\u81EA\u5DF1\u914D\u7F6E\u7684\u6A21\u677F")],-1),On={href:"https://github.com/lliao6060/Nuxt2-tailwindcss-template",target:"_blank",rel:"noopener noreferrer"},Un=s("Nuxt2-tailwindcss-template");function Vn(Wn,Pn){const a=t("ExternalLinkIcon");return o(),r(l,null,[u,n("ol",null,[n("li",null,[k,n("a",b,[d,p(a)]),m]),g]),h,n("ol",y,[n("li",null,[v,n("a",x,[_,p(a)]),f,j,w,q,C,L,S])]),N,n("ol",E,[n("li",null,[M,n("a",$,[B,p(a)])])]),A,n("h3",T,[I,z,n("a",D,[R,p(a)])]),F,n("h3",O,[U,V,n("a",W,[P,p(a)])]),G,n("h3",H,[J,X,n("a",K,[Q,p(a)])]),Y,n("h3",Z,[nn,sn,n("a",an,[pn,p(a)]),en,n("a",tn,[on,p(a)])]),rn,n("h3",ln,[cn,un,n("a",kn,[bn,p(a)])]),dn,n("h3",mn,[gn,hn,n("a",yn,[vn,p(a)])]),xn,n("ol",null,[n("li",null,[n("a",_n,[fn,jn,p(a)])])]),wn,n("ul",null,[n("li",null,[n("a",qn,[Cn,p(a)])])]),Ln,n("ul",null,[n("li",null,[n("a",Sn,[Nn,p(a)])]),n("li",null,[n("a",En,[Mn,p(a)])]),n("li",null,[n("a",$n,[Bn,p(a)])]),n("li",null,[n("a",An,[Tn,p(a)])]),n("li",null,[n("a",In,[zn,p(a)])]),n("li",null,[n("a",Dn,[Rn,p(a)])])]),Fn,n("ul",null,[n("li",null,[n("a",On,[Un,p(a)])])])],64)}var Jn=c(i,[["render",Vn]]);export{Jn as default};
