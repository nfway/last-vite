import { defineNavbarConfig } from "vuepress-theme-hope";

export const zhNavbarConfig = defineNavbarConfig([
 {
    text: "首页",
    icon: "home",
    link: "/",    
  },
 
 {
    text: "指南",
    icon: "guide",
    prefix: "/guide/",
    children: ["advanced/", "markdown/", "blog/", "feature","get-started","layout"],
  },
  "/config/",
  "/faq/",
  {
    text: "教程",
    icon: "guide",
    prefix: "/cookbook/",
    children: ["tutorial", "markdown/", "vuepress/", "style"],
  },
{
    text: "迁移",
    link: "/migration/",
  },
  {
    text: "下拉菜单",
    icon: "info",
    prefix: "/",
    children: [
      "changelog",
      "demo/",
      "contribution",
      {
        text: "插件",
        icon: "plugin",
        children: [
          {
            text: "AddThis 插件",
            icon: "share",
            link: "https://vuepress-theme-hope.github.io/v2/add-this/",
          },
          {
            text: "博客插件",
            icon: "blog",
            link: "https://vuepress-theme-hope.github.io/v2/blog/",
          },
          {
            text: "评论插件",
            icon: "comment",
            link: "https://vuepress-theme-hope.github.io/v2/comment/",
          },
          {
            text: "组件库",
            icon: "plugin",
            link: "https://vuepress-theme-hope.github.io/v2/components/",
          },
          {
            text: "代码复制插件",
            icon: "copy",
            link: "https://vuepress-theme-hope.github.io/v2/copy-code/",
          },
          {
            text: "Feed 插件",
            icon: "rss",
            link: "https://vuepress-theme-hope.github.io/v2/feed/",
          },
          {
            text: "LightGallery 插件",
            icon: "pic",
            link: "https://vuepress-theme-hope.github.io/v2/lightgallery/",
          },
          {
            text: "Markdown 增强插件",
            icon: "markdown",
            link: "https://vuepress-theme-hope.github.io/v2/md-enhance/",
          },
          {
            text: "图片预览插件",
            icon: "pic",
            link: "https://vuepress-theme-hope.github.io/v2/photo-swipe/",
          },
          {
            text: "PWA 插件",
            icon: "app",
            link: "https://vuepress-theme-hope.github.io/v2/pwa/",
          },
          {
            text: "阅读时间插件",
            icon: "read",
            link: "https://vuepress-theme-hope.github.io/v2/reading-time/",
          },
          {
            text: "Sass 调色板插件",
            icon: "palette",
            link: "https://vuepress-theme-hope.github.io/v2/sass-palette/",
          },
          {
            text: "Seo 插件",
            icon: "strong",
            link: "https://vuepress-theme-hope.github.io/v2/seo/",
          },
        ],
      },
    ],
  },
]);