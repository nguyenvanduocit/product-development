import { defineUserConfig } from 'vuepress'
import { obsidianTheme } from "@nguyenvanduocit/vuepress-theme-obsidian"
export default defineUserConfig({
  lang: 'vi-VN',
  title: 'trueBrain',
  description: 'trueBrain is a website for learning programming',
  theme: obsidianTheme,
  markdown: {
    links: false
  }
})
