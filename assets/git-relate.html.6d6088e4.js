import{b as a,o as r,c as s,a as e,g as o,F as l,f as t,e as n}from"./app.ebcd7c87.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const c={},h=e("h1",{id:"git\u5165\u9580",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git\u5165\u9580","aria-hidden":"true"},"#"),t(" Git\u5165\u9580")],-1),g=e("h6",{id:"tags-git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tags-git","aria-hidden":"true"},"#"),t(" tags: "),e("code",null,"Git")],-1),u=e("p",null,"\u7248\u672C\u63A7\u5236\u8EDF\u9AD4 \u70BA\u4E86\u7248\u672C\u63A7\u5236\u53CA\u5718\u968A\u5408\u4F5C\u4FBF\u5229 \u63D0\u9AD8\u958B\u767C\u6548\u7387\u8207\u5B89\u5168\u6027\u3002",-1),m={id:"\u5176\u4ED6\u529F\u80FD\u53C3\u8003",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#\u5176\u4ED6\u529F\u80FD\u53C3\u8003","aria-hidden":"true"},"#",-1),_=t(),b={href:"https://kknews.cc/code/eb4kqoq.html",target:"_blank",rel:"noopener noreferrer"},f=t("\u5176\u4ED6\u529F\u80FD\u53C3\u8003"),x={href:"http://cbsfly.github.io/git/git-date",target:"_blank",rel:"noopener noreferrer"},k=t("git \u9047\u5230Everything up-to-date"),v=n('<h4 id="\u5275\u5EFAgit\u5230\u9060\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u5275\u5EFAgit\u5230\u9060\u7AEF" aria-hidden="true">#</a> \u5275\u5EFAgit\u5230\u9060\u7AEF</h4><ul><li>vsCode\u9023\u63A5\u9060\u7AEF\u5009\u5EAB \u2026or create a new repository on the command line echo &quot;# ecommerce&quot; &gt;&gt; README.md git init git add README.md git commit -m &quot;first commit&quot; git branch -M main git remote add origin https://github.com/lliao6060/ecommerce.git git push -u origin main \u2026or push an existing repository from the command line git remote add origin https://github.com/lliao6060/ecommerce.git git branch -M main git push -u origin main</li></ul><p>==<strong>\u5E38\u7528\u529F\u80FD(2020-09-22\u66F4\u65B0)</strong>==</p><ul><li>\u8A2D\u5B9A\u9060\u7AEF\u5009\u5EAB git remote set-url origin <code>git\u5009\u5EAB\u7DB2\u5740</code></li><li>git\u9000\u7248 git reset --hard <code>git log\u524D\u9762uuid</code></li><li>git push -f =&gt;\u5F37\u5236\u8986\u84CB\u7DDA\u4E0A\u7D00\u9304\uFF08\u81EA\u5DF1\u7528\u6BD4\u8F03\u597D\uFF09</li><li>git pull --force origin master:master =&gt;\u5F37\u62C9</li></ul><p><strong>\u7D44\u5408\u6280</strong></p>',5),E=e("img",{src:"https://i.imgur.com/VgdAtWA.png",alt:""},null,-1),q={href:"http://dreamerslab.com/blog/tw/npm-basic-commands/",target:"_blank",rel:"noopener noreferrer"},V=t("git\u7279\u6B8A\u6307\u4EE4\u53C3\u8003"),A=n(`<h4 id="\u914D\u7F6E\u5E33\u865F" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5E33\u865F" aria-hidden="true">#</a> \u914D\u7F6E\u5E33\u865F</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git config --global user.name *** 
git config --global user.email ***@***.*** 
git config --list# \u67E5\u770B\u914D\u7F6E\u7684\u4FE1\u606F 
git help config# \u7372\u53D6\u5E6B\u52A9\u4FE1\u606F
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316" aria-hidden="true">#</a> \u521D\u59CB\u5316</h4><p><code>git init</code> - \u5728\u7576\u524D\u8CC7\u6599\u593E\u5275\u5EFAgit\u5009\u5EAB \u8981\u7D66git\u7248\u672C\u7BA1\u7406\u7684\u8A71\u8981\u5728\u8A72\u8CC7\u6599\u593E\u8F38\u5165git init(VS code\u6703\u8B8A\u6210\u7DA0\u8272)</p><h4 id="git-status-\u67E5\u770B\u6A94\u6848\u72C0\u614B" tabindex="-1"><a class="header-anchor" href="#git-status-\u67E5\u770B\u6A94\u6848\u72C0\u614B" aria-hidden="true">#</a> git status \u67E5\u770B\u6A94\u6848\u72C0\u614B</h4><ul><li><code>-s</code> \u7C21\u5316\u8F38\u51FA</li><li>M = \u5DF2\u7DE8\u8F2F</li><li>?? = \u672A\u8FFD\u8E64</li><li>A = \u5DF2\u66AB\u5B58\uFF08\u9810\u5B58\uFF09</li></ul><h4 id="clone\u5C08\u6848" tabindex="-1"><a class="header-anchor" href="#clone\u5C08\u6848" aria-hidden="true">#</a> clone\u5C08\u6848</h4><p><code>git clone + &#39;\u5009\u5EAB\u7DB2\u5740&#39;</code> - \u4E0B\u8F09github\u5C08\u6848 \u5230\u7576\u524D\u8CC7\u6599\u593E</p><h4 id="\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B" aria-hidden="true">#</a> \u6D41\u7A0B</h4><ul><li>\u958B\u767C\u5B8C\u5B58\u6A94</li></ul><ol><li><code>git add .</code> [\u6A94\u6848\u540D\u7A31] \u5C07\u4FEE\u6539\u7684\u6A94\u6848\u52A0\u5165\u66AB\u5B58\u5340(\u5305\u62EC\u65B0\u589E\u6216\u522A\u9664\u6A94\u6848)\uFF0C \u628A\u7576\u524D\u8CC7\u6599\u593E\u4E0B\u6240\u6709\u5DF2\u4FEE\u6539\u8CC7\u6599\u593E\u6216\u6A94\u6848\u52A0\u5165\u66AB\u5B58 ==<strong>\u8A18\u5F97add\u5B8C\u82E5\u9084\u6709\u4FEE\u6539\u8981\u518Dadd\u4E00\u6B21(\u524D\u63D0\u662F\u540C\u500B\u6A94\u6848)</strong>==</li><li><code>git commit</code> [\u6A94\u6848\u540D\u7A31] -m \u2018[\u63D0\u4EA4\u6558\u8FF0]\u2019 \u628A\u66AB\u5B58\u5340\u52A0\u5165\u8CC7\u6599\u5EAB(\u63D0\u4EA4)</li><li><code>git log</code> \u67E5\u770B\u5DF2\u63D0\u4EA4\u7D00\u9304 \u6309Q\u8DF3\u51FA</li><li><code>git push origin master</code> \u4E0A\u50B3\u5230\u9060\u7AEF\u5009\u5EABorigin = \u5009\u5EAB\u540D\u5B57 master = \u4E3B\u8981\u5206\u652F</li></ol><ul><li>\u9694\u5929\u7E7C\u7E8C\u958B\u767C <code>git pull origin master</code> \u62C9\u53D6\u9060\u7AEF\u8CC7\u6599\u66F4\u65B0\u672C\u5730\u7AEF \u82E5\u7522\u751F\u885D\u7A81\uFF0C\u89E3\u6C7A\u5F8C\u9700\u518D\u5B8C\u6210\u4E00\u6B21\u65B0\u7684\u63D0\u4EA4\u7D00\u9304(merge) ==\u5148\u62C9\u5F8C\u63A8\u539F\u5247== <strong>pull &gt; push</strong> ++\u6BCF\u5929\u90FD\u628A\u5C08\u6848pull \u78BA\u4FDD\u5C08\u6848\u70BA\u6700\u65B0\u72C0\u614B++</li></ul><h4 id="\u91CD\u8981" tabindex="-1"><a class="header-anchor" href="#\u91CD\u8981" aria-hidden="true">#</a> <strong>\u91CD\u8981</strong></h4><pre><code>- \u5275\u5728\u672C\u5730\u7684\u8CC7\u6599\u5EAB++\u8981\u5148\u8A2D\u5B9A\u4F4D\u7F6E\u518Dpush++ \u5426\u5247\u7CFB\u7D71\u6703\u986F\u793A\u627E\u4E0D\u5230origin
- \u65B9\u6CD5: git remote add origin \`github\u5009\u5EAB\u7DB2\u5740\` \u5F8C\u518Dpush\u4E00\u6B21\u5C31\u6703\u6210\u529F
- clone\u4E0D\u7528 
</code></pre>`,14),M={id:"npm\u76F8\u95DC\u6307\u4EE4",tabindex:"-1"},w=e("a",{class:"header-anchor",href:"#npm\u76F8\u95DC\u6307\u4EE4","aria-hidden":"true"},"#",-1),y=t(),N={href:"http://dreamerslab.com/blog/tw/npm-basic-commands/",target:"_blank",rel:"noopener noreferrer"},B=t("npm\u76F8\u95DC\u6307\u4EE4"),C=n("<p>==<strong>\u7D42\u7AEF\u6A5F\u6307\u4EE4\uFF08vsCode\uFF09</strong>==</p><ol><li><p>cd + \u8DEF\u5F91(\u8CC7\u6599\u593E\u4F4D\u7F6E)</p><ul><li>\u4E0A\u4E00\u9801 = <code>cd ..</code></li><li><code>cd test/css</code></li></ul></li><li><p>ctrl + L \u6E05\u7A7A\u7D42\u7AEF\u6A5F\u5167\u5BB9</p></li><li><p>ls -al \u67E5\u770B\u7576\u524D\u8CC7\u6599\u593E\u6240\u6709\u6A94\u6848</p></li><li><p>rm -rf <code>\u8CC7\u6599\u593E\u540D\u7A31</code> \u522A\u9664\u8CC7\u6599\u593E <strong>==\u6CE8\u610F==</strong> \u8981\u5F88\u78BA\u5B9A\u518D\u522A \u4ED6\u4E0D\u6703\u51FA\u73FE\u5728\u5783\u573E\u6876\u88E1\u9762\uFF08\u76E1\u91CF\u5C11\u7528\uFF09 \u{1F4AF} \u{1F606} \u{1F604} \u2764\uFE0F \u{1F41F}</p></li></ol>",2);function L(R,D){const i=a("ExternalLinkIcon");return r(),s(l,null,[h,g,u,e("h6",m,[p,_,e("a",b,[f,o(i)])]),e("p",null,[e("a",x,[k,o(i)])]),v,e("ul",null,[e("li",null,[E,e("strong",null,[e("a",q,[V,o(i)])])])]),A,e("h4",M,[w,y,e("a",N,[B,o(i)])]),C],64)}var I=d(c,[["render",L]]);export{I as default};
