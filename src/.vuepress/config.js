module.exports = {
  dest: './docs',
  base: '/tombstone/',
  title: 'tombstone',
  description: 'tombstone docs',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }]
  ],
  port: 3009,
  themeConfig: {
    nav: [
      {
        text: 'about',
        link: '/about'
      }
    ],

    sidebarDepth: 1, // 默认 1， 提取到 h2 (h1 是作为 sidebar 标题的)
    activeHeaderLinks: false, // 禁用滚动时 url hash 更新
    sidebar: [
      ['/', 'home'],
      {
        title: '手册',
        path: '/handbook/',
        collapsable: true, // 默认 true, 可折叠； 设为 false 永远展开
        sidebarDepth: 1,
        children: [
          '/handbook/git'
        ]
      },
      {
        title: '前端技术清单',
        path: '/frontend/',
        collapsable: false, // 默认 true, 可折叠； 设为 false 永远展开
        sidebarDepth: 1,
        children: [
          '/frontend/performance/',
          {
            title: 'JavaScript',
            path: '/frontend/javascript/',
            collapsable: false,
            children: [
              '/frontend/javascript/howbrowserworks',
              '/frontend/javascript/howjsworks',
              '/frontend/javascript/crossorigin'
            ]
          },
          {
            title: 'CSS',
            path: '/frontend/css/',
            collapsable: false,
            children: [
              '/frontend/css/cssom',
              '/frontend/css/csslayout',
              '/frontend/css/bfc'
            ]
          }
        ]
      },
      {
        title: '文章',
        path: '/blog/',
      }
    ]
  }
}