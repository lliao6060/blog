/**
 * Client app enhancement file.
 *
 * https://v2.vuepress.vuejs.org/advanced/cookbook/usage-of-client-app-enhance.html
 */
export default ({
  app, // the version of Vue being used in the VuePress app
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  // both in server/client side
  if (typeof exports !== 'object') {
    // ...only trigger in client side
  }
}
