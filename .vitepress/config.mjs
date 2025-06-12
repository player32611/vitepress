import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepress/",
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'vitepress', link: '/pages/vitepress/quick-start' },
      { text: '前端', link: '/pages/front-end/front-end' },
      { text: 'GameMakerStudio 2', link: '/pages/gms2/gms2' }
    ],

    sidebar: [
      {
        text: 'vitepress使用指南',
        items: [
          { text: '快速开始', link: '/pages/vitepress/quick-start' },
          { text: '特殊语法', link: '/pages/vitepress/basic-grammer' }
        ]
      },
      {
        text: '前端',
        items: [
          { text: 'html', link: '/front-end' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'GameMakerStudio 2',
        items: [
          { text: 'html', link: '/front-end' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
