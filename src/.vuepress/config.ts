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
    [
      "meta",
      {
        name: "google-site-verification",
        content: "qG3soux9jAKB4Q_DYf7yj1p5cEIuib6yG4zDhpmv2_E",
      },
    ],
  ],

  locales: {
    "/": {
<<<<<<< HEAD
      lang: "zh-CN",
      title: "这不是一个中文标题",
      description: "一个具有强大功能的 vuepress 主题✨",
    },

=======
      lang: "en-US",
      title: "vuepress-theme-hope",
      description: "A vuepress theme with tons of features✨",
    },
   },
  
>>>>>>> parent of c11cfce (Merge branch 'dev')
  themeConfig,

  alias: {
    "@IconDisplay": path.resolve(__dirname, "./components/IconDisplay"),
    "@KatexPlayground": path.resolve(__dirname, "./components/KatexPlayground"),
    "@theme-hope/components/HomeHero": path.resolve(
      __dirname,
      "./components/HopeHero"
    ),
  },

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
