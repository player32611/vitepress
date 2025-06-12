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
      { text: '前端', link: '/pages/front-end/html' },
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
          { text: 'HTML', link: '/pages/front-end/html' },
          { text: 'CSS', link: '/pages/front-end/css' },
          { text: 'JavaScript', link: '/pages/front-end/javascript' },
          { text: 'React', link: '/pages/front-end/react' },
          { text: '网络请求', link: '/pages/front-end/network-requests' }
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
      { icon: 'github', link: 'https://github.com/player32611' }
    ]
  }
})
