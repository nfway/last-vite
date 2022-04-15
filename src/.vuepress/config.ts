import { addViteOptimizeDepsInclude } from "@mr-hope/vuepress-shared";
import { path } from "@vuepress/utils";
import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

const base = (process.env.BASE as "/" | `/${string}/`) || "/";

export default defineHopeConfig({
  base,

  dest: "./dist",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
    //[
    //  "meta",
    //  {
    //    name: "google-site-verification",
    //    content: "qG3soux9jAKB4Q_DYf7yj1p5cEIuib6yG4zDhpmv2_E",
    //  },
    //],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "这不是一个中文标题",
      description: "一个具有强大功能的 vuepress 主题✨",
    },

  },

  themeConfig,

  onInitialized: (app) => {
    if (app.env.isDev)
      addViteOptimizeDepsInclude(app, [
        "@mr-hope/vuepress-shared/lib/client",
        "dayjs",
        "dayjs/plugin/localizedFormat",
        "dayjs/plugin/objectSupport",
        "dayjs/plugin/timezone",
        "dayjs/plugin/utc",
      ]);

    addViteOptimizeDepsInclude(app, [
      "axios",
      "three",
      "three/examples/jsm/controls/OrbitControls",
      "three/examples/jsm/loaders/STLLoader",
    ]);
  },
});
