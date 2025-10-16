const path = require('path')
const { description } = require('../../package')

module.exports = {
  base: '/blog/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Yan Blog',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://i.imgur.com/aMjHbLE.jpg',
    home: '/',
    repo: 'lliao6060/blog',
    repoLabel: 'lliao/blog',
    editLink: false,
    lastUpdated: true,
    navbar: [
      {
        text: 'Posts',
        link: '/post/',
      },
    ],
    sidebar: {
      '/post/': [
        {
          text: '關於我',
          collapsible: true,
          children: [
            '/post/README.md',
          ]
        },
        {
          text: '開發環境與工具',
          collapsible: true,
          children: [
            '/post/Development-Tools/before-interview-must-learn.md',
            '/post/Development-Tools/work-env.md',
            '/post/Development-Tools/vscode.md',
            '/post/Development-Tools/cursor-figma-mcp.md',
            '/post/Development-Tools/homebrew.md',
            '/post/Development-Tools/ngrok.md',
            '/post/Development-Tools/tool.md',
          ]
        },
        {
          text: '面試題庫',
          collapsible: true,
          children: [
            '/post/Interview/frontend-interview-questions.md',
            '/post/Interview/javascript-questions.md',
            '/post/Interview/vue-questions.md',
            '/post/Interview/wishmobile-interview.md',
          ]
        },
        {
          text: '版本控制 Git',
          collapsible: true,
          children: [
            '/post/Git_Learning/git-Instruction.md',
            '/post/Git_Learning/git-relate.md',
            '/post/Git_Learning/git-qa.md',
            '/post/Git_Learning/git-stash.md',
            '/post/Git_Learning/sourcetree.md'
          ]
        },
        {
          text: '前端基礎',
          collapsible: true,
          children: [
            {
              text: 'CSS & Sass',
              collapsible: true,
              children: [
                '/post/Frontend-Basics/CSS-Sass/fix-landscape.md',
                '/post/Frontend-Basics/CSS-Sass/animate-refer.md',
                '/post/Frontend-Basics/CSS-Sass/mixin.md',
                '/post/Frontend-Basics/CSS-Sass/vw-vh-vmin-vmax-use.md'
              ]
            },
            {
              text: 'JavaScript',
              collapsible: true,
              children: [
                '/post/Frontend-Basics/Javascript/js-basic.md',
                '/post/Frontend-Basics/Javascript/es6.md',
                '/post/Frontend-Basics/Javascript/obj-methods.md',
                '/post/Frontend-Basics/Javascript/axios.md',
                '/post/Frontend-Basics/Javascript/utils.md',
                '/post/Frontend-Basics/Javascript/css-autoprefixer.md',
                '/post/Frontend-Basics/Javascript/i18n.md'
              ]
            }
          ],
        },
        {
          text: 'Vue 生態系',
          collapsible: true,
          children: [
            {
              text: 'Vue2',
              collapsible: true,
              children: [
                '/post/Vue/Vue2/vue2-relate.md',
                '/post/Vue/Vue2/vue2-typescript-relate.md',
              ]
            },
            {
              text: 'Vue3',
              collapsible: true,
              children: [
                '/post/Vue/Vue3/vue3-relate.md',
              ]
            },
            {
              text: 'Store (Vuex/Pinia)',
              collapsible: true,
              children: [
                '/post/Vue/Store/pinia-relate.md',
                '/post/Vue/Store/vuex-relate.md',
                '/post/Vue/Store/vuex4-relate.md',
                '/post/Vue/Store/created-simple-store.md',
              ]
            },
            {
              text: 'Vue Router',
              collapsible: true,
              children: [
                '/post/Vue/VueRouter/vue-router4.md',
                '/post/Vue/VueRouter/vue-router-qa.md',
              ]
            },
            '/post/Vue/components.md',
            '/post/Vue/plugins.md',
          ],
        },
        {
          text: 'React 生態系',
          collapsible: true,
          children: [
            {
              text: 'Store',
              collapsible: true,
              children: [
                {
                  text: 'Redux',
                  collapsible: true,
                  children: [
                    '/post/React/Store/Redux/react-redux.md',
                    '/post/React/Store/Redux/react-redux-toolkit.md'
                  ]
                },
                {
                  text: 'Zustand',
                  collapsible: true,
                  children: [
                    '/post/React/Store/Zustand/base.md',
                  ]
                }
              ]
            },
            '/post/React/plugins.md',
            '/post/React/theme-system.md',
          ],
        },
        {
          text: 'Nuxt 框架',
          collapsible: true,
          children: [
            '/post/Nuxt/nuxt2.md',
            '/post/Nuxt/nuxt3.md',
          ],
        },
        {
          text: '建構工具',
          collapsible: true,
          children: [
            {
              text: 'Webpack',
              collapsible: true,
              children: [
                '/post/Build-Tools/Webpack/getting-start.md',
                '/post/Build-Tools/Webpack/webpack-use-vite-dev.md',
              ]
            },
            {
              text: 'Vite',
              collapsible: true,
              children: [
                '/post/Build-Tools/Vite/vite-vs-webpack.md',
                '/post/Build-Tools/Vite/vite-relate.md',
                '/post/Build-Tools/Vite/local-https-dev.md',
                '/post/Build-Tools/Vite/vite-use-remockjs.md'
              ]
            },
            {
              text: 'Eslint & Prettier',
              collapsible: true,
              children: [
                '/post/Build-Tools/Eslint-Prettier/init.md',
              ]
            },
            '/post/Build-Tools/gulp.md',
          ],
        },
        {
          text: 'DevOps 與部署',
          collapsible: true,
          children: [
            '/post/DevOps/base.md',
            '/post/DevOps/shell-demo.md',
            '/post/DevOps/crontab.md',
          ],
        },
        {
          text: '行動裝置開發',
          collapsible: true,
          children: [
            '/post/Mobile_Development/base.md',
            '/post/Mobile_Development/navigation-occlusion-issue.md',
            '/post/Mobile_Development/mobile-phone-virtual-keyboard-occlusion.md',
          ],
        },
        {
          text: '第三方服務整合',
          collapsible: true,
          children: [
            '/post/Third-Party-Integration/google-login-api.md',
            '/post/Third-Party-Integration/google-analytics.md',
            '/post/Third-Party-Integration/google-tag-manager.md',
            '/post/Third-Party-Integration/google-search-console.md',
            '/post/Third-Party-Integration/facebook-login-api.md',
            '/post/Third-Party-Integration/line-liff-api.md',
            '/post/Third-Party-Integration/twitter.md',
            '/post/Third-Party-Integration/use-google-sheet-as-db.md',
            '/post/Third-Party-Integration/use-google-sheet-as-db-api-tandem.md',
            '/post/Third-Party-Integration/google-sheet-app-script.md'
          ],
        },
        {
          text: '其他筆記',
          collapsible: true,
          children: [
            '/post/Others/common-problem.md',
            '/post/Others/input-regex.md',
          ],
        },
      ]
    }
  },

  /**
   * Apply plugins
   *
   * Ref：https://v2.vuepress.vuejs.org/reference/plugin/back-to-top.html#install
   */
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      }
    ]
  ]
}
