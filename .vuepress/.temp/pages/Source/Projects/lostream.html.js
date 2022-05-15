export const data = {
  "key": "v-4bdff73c",
  "path": "/Source/Projects/lostream.html",
  "title": "",
  "lang": "vi-VN",
  "frontmatter": {
    "repo": "https://github.com/nguyenvanduocit/lostream"
  },
  "excerpt": "",
  "headers": [
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
