import{b as r,o as l,c as o,a as s,g as a,F as i,f as n,e as t}from"./app.ebcd7c87.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const c={},u=s("h1",{id:"git\u5E38\u898B\u554F\u984C",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#git\u5E38\u898B\u554F\u984C","aria-hidden":"true"},"#"),n(" Git\u5E38\u898B\u554F\u984C")],-1),m=s("ul",null,[s("li",null,"Please move or remove them before you merge.")],-1),d=n("Aborting "),b={href:"https://www.itread01.com/content/1549924748.html",target:"_blank",rel:"noopener noreferrer"},g=n("\u89E3\u6CD5"),h=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>git clean  <span class="token operator">-</span>d  <span class="token operator">-</span>fx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,1),_=n("git pull\u9047\u5230\u932F\u8AA4\uFF1Aerror: Your local changes to the following files would be overwritten by merge:\u89E3\u6C7A\u65B9\u6CD5 "),v={href:"https://www.itread01.com/content/1545046022.html",target:"_blank",rel:"noopener noreferrer"},k=n("\u89E3\u6CD5"),f=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u65B9\u6CD51 \u5982\u679C\u4F60\u60F3\u4FDD\u7559\u525B\u624D\u672C\u5730\u4FEE\u6539\u7684\u7A0B\u5F0F\u78BC\uFF0C\u4E26\u628Agit\u4F3A\u670D\u5668\u4E0A\u7684\u7A0B\u5F0F\u78BCpull\u5230\u672C\u5730\uFF08\u672C\u5730\u525B\u624D\u4FEE\u6539\u7684\u7A0B\u5F0F\u78BC\u5C07\u6703\u88AB\u66AB\u6642\u5C01\u5B58\u8D77\u4F86)</span>
git stash
git pull origin master
git stash pop

<span class="token comment">//\u5982\u6B64\u4E00\u4F86\uFF0C\u4F3A\u670D\u5668\u4E0A\u7684\u7A0B\u5F0F\u78BC\u66F4\u65B0\u5230\u4E86\u672C\u5730\uFF0C\u800C\u4E14\u4F60\u672C\u5730\u4FEE\u6539\u7684\u7A0B\u5F0F\u78BC\u4E5F\u6C92\u6709\u88AB\u8986\u84CB\uFF0C\u4E4B\u5F8C\u4F7F\u7528add\uFF0Ccommit\uFF0Cpush \u547D\u4EE4\u5373\u53EF\u66F4\u65B0\u539F\u751F\u4EE3\u78BC\u5230\u4F3A\u670D\u5668\u4E86\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u65B9\u6CD52 \u5982\u679C\u4F60\u60F3\u5B8C\u5168\u5730\u8986\u84CB\u672C\u5730\u7684\u7A0B\u5F0F\u78BC\uFF0C\u53EA\u4FDD\u7559\u4F3A\u670D\u5668\u7AEF\u7A0B\u5F0F\u78BC\uFF0C\u5247\u76F4\u63A5\u56DE\u9000\u5230\u4E0A\u4E00\u500B\u7248\u672C\uFF0C\u518D\u9032\u884Cpull\uFF1A</span>
git reset <span class="token operator">--</span>hard
git pull origin master
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,2),j=n("\u5982\u4F55\u89E3\u51B3git pull\u4E4B\u540E\u62A5\u9519\uFF1APlease enter a commit to explain why this merge is necessary?(merge branch) "),x={href:"https://blog.csdn.net/Wbiokr/article/details/75270610",target:"_blank",rel:"noopener noreferrer"},w=n("\u89E3\u6CD5"),E=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1.</span> \u6309\u952E\u76D8\u5B57\u6BCD i \u8FDB\u5165insert\u6A21\u5F0F
<span class="token number">2.</span> \u4FEE\u6539\u6700\u4E0A\u9762\u90A3\u884C\u9EC4\u8272\u5408\u5E76\u4FE1\u606F<span class="token punctuation">,</span>\u53EF\u4EE5\u4E0D\u4FEE\u6539
<span class="token number">3.</span> \u6309\u952E\u76D8\u5DE6\u4E0A\u89D2<span class="token string">&quot;Esc&quot;</span>
<span class="token number">4.</span> \u8F93\u5165<span class="token string">&quot;:wq&quot;</span><span class="token punctuation">,</span>\u6CE8\u610F\u662F\u5192\u53F7<span class="token operator">+</span>wq<span class="token punctuation">,</span>\u6309\u56DE\u8F66\u952E\u5373\u53EF
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,1),q=n("git pull\u9047\u5230\u932F\u8AA4\uFF1A Pull is not possible because you have unmerged files. Please, fix them up in the work tree, and then use 'git add/rm "),H=s("code",null,"<file>",-1),A=n("' as appropriate to mark resolution, or use 'git commit -a'. "),D={href:"https://www.itread01.com/content/1545046022.html",target:"_blank",rel:"noopener noreferrer"},y=n("\u89E3\u6CD5"),F=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u65B9\u6CD51 \u5982\u679C\u60F3\u4FDD\u7559\u672C\u5730\u7684\u4FEE\u6539\uFF0C\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4\uFF0C\u5C07\u6587\u4EF6add\uFF0C\u7136\u5F8Ccommit\u3002</span>
git add <span class="token operator">-</span>u 
git commit <span class="token operator">-</span>m <span class="token string">&quot;\u63CF\u8FF0&quot;</span> 
git pull
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u65B9\u6CD52 \u60F3\u4FDD\u7559\u672C\u5730\u7684\u4FEE\u6539\uFF0C\u4F46\u662F\u9084\u4E0D\u60F3\u65B0\u52A0\u4E00\u6B21commit\uFF0C\u53EF\u4EE5\u4F7F\u7528git stash\u547D\u4EE4\u3002</span>
git stash 
git pull 
git stash pop

<span class="token comment">//git stash \u53EF\u7528\u4F86\u66AB\u5B58\u7576\u524D\u6B63\u5728\u9032\u884C\u7684\u5DE5\u4F5C\uFF0C \u6BD4\u5982\u60F3pull \u6700\u65B0\u4EE3\u78BC\uFF0C \u53C8\u4E0D\u60F3\u52A0\u65B0commit\uFF0C \u6216\u8005\u53E6\u5916\u4E00\u7A2E\u60C5\u6CC1\uFF0C\u70BA\u4E86fix \u4E00\u500B\u7DCA\u6025\u7684bug,  \u5148stash, \u4F7F\u8FD4\u56DE\u5230\u81EA\u5DF1\u4E0A\u4E00\u500Bcommit, \u6539\u5B8Cbug\u4E4B\u5F8C\u518Dstash pop, \u7E7C\u7E8C\u539F\u4F86\u7684\u5DE5\u4F5C\u3002</span>
<span class="token comment">//\u9019\u7A2E\u65B9\u6CD5\u662F\u4E00\u7A2E\u6BD4\u8F03\u666E\u904D\u7684\u505A\u6CD5\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u65B9\u6CD53 \u653E\u68C4\u672C\u5730\u7684\u4FEE\u6539</span>
git reset <span class="token operator">--</span>hard <span class="token constant">FETCH_HEAD</span> 
git pull

<span class="token comment">//FETCH_HEAD\u8868\u793A\u4E0A\u4E00\u6B21\u6210\u529Fgit pull\u4E4B\u5F8C\u5F62\u6210\u7684commit\u9EDE\u3002</span>
<span class="token comment">//\u6CE8\u610F\uFF1Agit merge\u6703\u5F62\u6210MERGE-HEAD(FETCH-HEAD)\u3002</span>
<span class="token comment">//git push\u6703\u5F62\u6210HEAD\u9019\u6A23\u7684\u5F15\u7528\u3002HEAD\u4EE3\u8868\u672C\u5730\u6700\u8FD1\u6210\u529Fpush\u5F8C\u5F62\u6210\u7684\u5F15\u7528\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,3);function C(N,P){const e=r("ExternalLinkIcon");return l(),o(i,null,[u,m,s("blockquote",null,[s("p",null,[d,s("a",b,[g,a(e)])])]),h,s("ul",null,[s("li",null,[_,s("a",v,[k,a(e)])])]),f,s("ul",null,[s("li",null,[j,s("a",x,[w,a(e)])])]),E,s("ul",null,[s("li",null,[q,H,A,s("a",D,[y,a(e)])])]),F],64)}var B=p(c,[["render",C]]);export{B as default};
