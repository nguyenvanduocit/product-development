export const data = {
  "key": "v-536f5b61",
  "path": "/Source/Projects/Watch%20Party.html",
  "title": "",
  "lang": "vi-VN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Client",
      "slug": "client",
      "children": [
        {
          "level": 3,
          "title": "Stack",
          "slug": "stack",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Server",
      "slug": "server",
      "children": [
        {
          "level": 3,
          "title": "Server",
          "slug": "server-1",
          "children": []
        }
      ]
    }
  ]
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
