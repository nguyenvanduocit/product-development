export const data = {
  "key": "v-f8570170",
  "path": "/Source/Projects/Fireass.html",
  "title": "",
  "lang": "vi-VN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Stack",
      "slug": "stack",
      "children": []
    },
    {
      "level": 2,
      "title": "Features",
      "slug": "features",
      "children": []
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
