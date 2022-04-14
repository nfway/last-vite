import { defineSidebarConfig } from "vuepress-theme-hope";

export const zhSidebarConfig = defineSidebarConfig({
  "/zh/guide/": [
    {
      text: "快速上手",
      icon: "creative",
      prefix: "get-started/",
      collapsable: true,
      children: ["intro", "install", "markdown"],
    },
    {
      text: "界面",
      icon: "palette",
      prefix: "interface/",
      collapsable: true,
      children: [
        "darkmode",
        "theme-color",
        "icon",
        "code-theme",
        "accessibility",
        "pure",
        "others",
      ],
    },
    {
      text: "布局",
      icon: "layout",
      prefix: "layout/",
      collapsable: true,
      children: [
        "navbar",
        "sidebar",
        "page",
        "breadcrumb",
        "footer",
        "home",
		{
			type: 'link',
			text: '编写文档',
			link: 'home',          
			},
        "slides",
      ],
    },
    {
      text: "Markdown 增强",
      icon: "markdown",
      prefix: "markdown/",
      collapsable: true,
      children: [
        "intro",
        "container",
        "components",
        "code-group",
        "align",
        "sup-sub",
        "footnote",
        "mark",
        "tasklist",
        "tex",
        "flowchart",
        "mermaid",
        "demo",
        "presentation",
        "others",
        "external",
      ],
    },
    {
      text: "功能",
      icon: "discover",
      prefix: "feature/",
      collapsable: true,
      children: [
        "page-info",
        "comment",
        "copy-code",
        "photo-swipe",
        "meta",
        "search",
        "encrypt",
      ],
    },
    {
      text: "博客",
      icon: "blog",
      prefix: "blog/",
      collapsable: true,
      children: ["intro", "article", "category-and-tags", "timeline", "home"],
    },
    {
      text: "高级功能",
      icon: "advance",
      prefix: "advanced/",
      collapsable: true,
      children: ["pwa", "feed", "seo", "sitemap", "customize", "extend"],
    },
  ],

  "/zh/config/": [
    "intro",
    "i18n",
    {
      text: "主题配置",
      icon: "config",
      prefix: "theme/",
      children: ["", "basic", "feature", "layout", "apperance"],
    },
    {
      text: "插件配置",
      icon: "plugin",
      prefix: "plugins/",
      children: [
        "intro",
        "blog",
        "comment",
        "feed",
        "md-enhance",
        "pwa",
        "others",
      ],
    },
    "page",
    "style",
  ],

  "/zh/cookbook/": [
    "tutorial",
    {
      text: "Markdown",
      icon: "markdown",
      prefix: "markdown/",
      collapsable: true,
      children: [
        "",
        "demo",
        {
          text: "Emoji",
          icon: "emoji",
          link: "emoji/",
          prefix: "emoji/",
          collapsable: true,
          children: ["people", "nature", "object", "place", "symbol"],
        },
      ],
    },
    {
      text: "VuePress",
      icon: "vue",
      prefix: "vuepress/",
      collapsable: true,
      children: ["", "file", "markdown", "config", "plugin", "theme"],
    },
    "style",
  ],

  "/zh/": [
    "",
    {
      text: "指南",
      icon: "creative",
      prefix: "guide/",
      children: [
        "get-started/",
        "interface/",
        "layout/",
        "markdown/",
        "feature/",
        "blog/",
        "advanced/",
      ],
    },
    {
      text: "配置",
      icon: "config",
      prefix: "config/",
      children: ["intro", "i18n", "theme/", "plugins/", "page", "style"],
    },
    {
      text: "教程",
      icon: "guide",
      prefix: "cookbook/",
      children: ["tutorial", "markdown/", "vuepress/", "style"],
    },
    {
      text: "迁移",
      icon: "change",
      prefix: "migration",
      children: ["config", "page", "style"],
    },
    "changelog",
    "faq",
    "demo/",
    "contribution",
  ],
});
