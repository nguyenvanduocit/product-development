export const data = {
  "key": "v-6a89657f",
  "path": "/Source/Projects/EbookPacker.html",
  "title": "",
  "lang": "vi-VN",
  "frontmatter": {
    "repo": "https://github.com/nguyenvanduocit/ebookpacker"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Features",
      "slug": "features",
      "children": []
    },
    {
      "level": 2,
      "title": "Stack",
      "slug": "stack",
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
