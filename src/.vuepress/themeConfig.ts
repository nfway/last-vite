import { defineThemeConfig } from "vuepress-theme-hope";
//import { enNavbarConfig, zhNavbarConfig } from "./navbar";
import { enSidebarConfig, zhSidebarConfig } from "./sidebar";

const hostname =
  process.env.HOSTNAME || "https://vuepress-theme-hope-v2.netlify.app";

export default defineThemeConfig({
  hostname,
 
// Navbar
  navbar:[
	  {
    text: "指南",
    icon: "guide",
    prefix: "/guide/",
    children: ["advanced/", "markdown/", "blog/", "feature","get-started","layout"],
  },
	{
		text: '配置',
		link: '/config/',
	  },

    {
		text: 'FAQ',
		link: '/faq/',
	  },
  ,
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
  
 ],
  
  author: {
    name: "Mr.Hope",
    url: "https://mrhope.site",
  },

  iconPrefix: "iconfont icon-",
  contributors: false,
  editLink: false,
  logo: "/logo.svg",

  footer: "MIT Licensed | Copyright © 2019-present Mr.Hope",
  copyright: false,
  displayFooter: true,

  pageInfo: ["Category", "Tag", "ReadingTime"],

<<<<<<< HEAD
=======
  locales: {
    "/": {
      navbar: enNavbarConfig,
      sidebar: enSidebarConfig,
    },
  },
>>>>>>> parent of c11cfce (Merge branch 'dev')

  plugins: {
    blog: false,
    search: true,

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },

    pwa: {
      update: "hint",
      favicon: "/favicon.ico",
      themeColor: "#46bd87",
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    },
  },
});
