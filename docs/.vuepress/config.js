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
          text: 'About Me',
          collapsible: true,
          children: [
            '/post/README.md',
          ]
        },
        {
          text: 'Before Work',
          collapsible: true,
          children: [
            '/post/Before-work/before-interview-must-learn.md',
            '/post/Before-work/work-env.md',
            '/post/Before-work/ngrok.md'
          ]
        },
        {
          text: 'Issue',
          collapsible: true,
          children: [
            '/post/Issue/countdown.md',
            '/post/Issue/js-watch-dom-style.md',
            '/post/Issue/linear-gradient.md',
            '/post/Issue/local-get-txt.md',
            '/post/Issue/vue-cli-images-output.md',
            '/post/Issue/weekly-report.md',
            '/post/Issue/firework.md',
            '/post/Issue/download-excel.md',
            '/post/Issue/pagination.md',
          ],
        },
        {
          text: 'CSS & Sass',
          collapsible: true,
          children: [
            '/post/Css_Sass/fix-landscape.md',
            '/post/Css_Sass/animate-refer.md',
            '/post/Css_Sass/mixin.md',
            '/post/Css_Sass/vw-vh-vmin-vmax-use.md'
          ]
        },
        {
          text: 'Javascript',
          collapsible: true,
          children: [
            '/post/Javascript/axios.md',
            '/post/Javascript/utils.md',
            '/post/Javascript/css-autoprefixer.md',
            '/post/Javascript/es6.md',
            '/post/Javascript/js-basic.md',
            '/post/Javascript/obj-methods.md',
            '/post/Javascript/i18n.md'
          ],
        },
        {
          text: 'Webpack',
          collapsible: true,
          children: [
            '/post/Webpack/webpack-use-vite-dev.md',
            '/post/Webpack/getting-start.md',
          ],
        },
        {
          text: 'Vue',
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
              text: 'Store',
              collapsible: true,
              children: [
                '/post/Vue/Store/pinia-relate.md',
                '/post/Vue/Store/vuex-relate.md',
                '/post/Vue/Store/created-simple-store.md',
              ]
            },
            {
              text: 'VueRouter',
              collapsible: true,
              children: [
                '/post/Vue/VueRouter/vue-router-qa.md',
                '/post/Vue/VueRouter/vue-router4.md',
              ]
            },
            '/post/Vue/components.md',
            '/post/Vue/plugins.md',
          ],
        },
        {
          text: 'Vite',
          collapsible: true,
          children: [
            '/post/Vite/vite-vs-webpack.md',
            '/post/Vite/vite-relate.md',
            '/post/Vite/vite-use-remockjs.md'
          ],
        },
        {
          text: 'Git Learning',
          collapsible: true,
          children: [
            '/post/Git_Learning/git-Instruction.md',
            '/post/Git_Learning/git-qa.md',
            '/post/Git_Learning/git-relate.md',
            '/post/Git_Learning/git-stash.md',
            '/post/Git_Learning/sourcetree.md'
          ]
        },
        {
          text: 'UI',
          collapsible: true,
          children: [
            '/post/UI/el-ui-config.md',
            '/post/UI/iView-ui-config.md'
          ],
        },
        {
          text: 'Others',
          collapsible: true,
          children: [
            '/post/Others/common-problem.md',
            '/post/Others/input-regex.md',
            '/post/Others/tool.md',
          ],
        },
        {
          text: '第三方串接',
          collapsible: true,
          children: [
            '/post/third-party-api/google-login-api.md',
            '/post/third-party-api/facebook-login-api.md',
            '/post/third-party-api/line-liff-api.md',
            '/post/third-party-api/use-google-sheet-as-db.md',
            '/post/third-party-api/use-google-sheet-as-db-api-tandem.md',
            '/post/third-party-api/google-sheet-app-script.md'
          ],
        },
        {
          text: 'Nuxt學習',
          collapsible: true,
          children: [
            '/post/Nuxt/nuxt2.md',
            '/post/Nuxt/nuxt3.md',
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
