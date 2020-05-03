module.exports = {
  title: 'RN Utility Style',
  description: 'Utility style framework for React Native',
  themeConfig: {
    nav: [
      { text: 'Github', link: 'https://github.com/ariona/rn-utility-style' }
    ],
    sidebar: [
      {
        title: 'Getting started',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/guide/usage',
          '/guide/config',
          '/guide/stylesheet',
          '/guide/reference',
        ]
      },
      {
        title: 'Utilities',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/guide/layout',
          '/guide/sizing',
          '/guide/margin',
          '/guide/padding',
          '/guide/border',
          '/guide/background',
          '/guide/typography',
          '/guide/transform',
          '/guide/decoration',
          '/guide/interactivity'
        ]
      }
    ]
  }
}