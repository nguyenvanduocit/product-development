export const data = {
  "key": "v-3c6db230",
  "path": "/Source/Projects/Ebook%20Template.html",
  "title": "",
  "lang": "vi-VN",
  "frontmatter": {
    "repo": "https://github.com/nguyenvanduocit/ebook-template"
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
