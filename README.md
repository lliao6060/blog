# vuepress demo
[網址](https://lliao6060.github.io/blog/)

This is a demo using vuepress

## Usage

### Dev

```bash
$ npm run dev
```

### Build

```bash
$ npm run build
```

### Deploy

```bash
$ npm run deploy
```

> Remember to first run `build` before deploy.



## How to add an article?

1. Add your new markdown in `post` folder

2. Add your post to `.vuepress/config.js` sidebar

```js
module.exports = {
  themeConfig: {
    sidebar: {
      '/post/': [
        {
          text: 'Category Title',
          collapsible: true,
          children: [
            // this path must includes the parent sub route in sidebar
            // for this example
            // /post/to/your/markdown.md must start with '/post/' because the sub route is '/post/'
            '/post/to/your/markdown.md',
            // children can also contain another category
            {
              text: 'Sub Category Title',
              collapsible: true,
              children: [
                '/post/to/another/markdown.md'
              ]
            }
          ]
        },
      ]
    }
  }
}
```

3. yarn build

4. yarn deploy



## How to use Vue SFC in markdown?

Since markdown will first be compiled into `HTML`, the compiled result can then be used as pure `Vue SFC` format, but the html should not wrapped with `<template>` tag.

```markdown
# Markdown Value can contain a Vue SFC file format

<div class="cool">
  My Component
</div>

<script>
  console.log('Hello')
</script>

<style scoped>
.cool {
  color: pink;
}
</style>
```
