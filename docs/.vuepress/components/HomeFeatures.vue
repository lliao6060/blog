<template>
  <div class="home-features">
    <div
      v-for="feature in features"
      :key="`feature-block-${feature.title}`"
      class="feature"
    >
      <h2>{{ feature.title }}</h2>
      <ul>
        <li
          v-for="(detail, i) in feature.details"
          :key="`feature-defail-${i}`"
        >
          <span v-if="typeof detail === 'string'">
            {{ detail }}
          </span>
          <a v-else :href="detail.href" target="_blank">
            {{ detail.content }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFeatures',
  data() {
    return {
      features: [
        {
          title: 'Frontend Development',
          details: [
            'Vuejs 4+years',
            'Reactjs 1+years',
            'Nuxtjs 0.5+years',
            'TypeScript 3+years',
            'SCSS 4+years',
            'TailwindCSS 1.5+year',
          ],
        },
        {
          title: 'Others',
          details: [
            'Webpack 3+years',
            'Vite 2.5+years',
            'git 3+years',
            'gitlab 3+years',
          ],
        },
        {
          title: 'Favorite',
          details: [
            {
              content: '[NPM] jspdf-html2canvas',
              href: 'https://www.npmjs.com/package/jspdf-html2canvas',
            },
            {
              content: '[NPM] node-ftp-cli',
              href: 'https://www.npmjs.com/package/node-ftp-cli',
            },
            {
              content: '[NPM] remockjs',
              href: 'https://www.npmjs.com/package/remockjs',
            },
          ]
        },
      ],
    };
  }
};
</script>

<style lang="scss">
.home-features {
  display: flex;
  justify-content: center;
  > .feature {
    flex: 1 0 auto;
  }
}
</style>
