module.exports = {
  dest: './docs',
  base: '/tombstone/',
  title: 'tombstone',
  description: 'tombstone docs',
  head: [],
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
        title: 'handbook',
        path: '/handbook/',
        collapsable: true, // 默认 true, 可折叠； 设为 false 永远展开
        sidebarDepth: 1,
        children: [
          '/handbook/git'
        ]
      },
      {
        title: 'blog',
        path: '/blog/',
      }
    ]
  }
}