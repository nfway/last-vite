import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";


export default defineUserConfig({
  base: "/",

  head: [

	
    ['meta', { name: 'keywords', content: 'ESG,ohesg,ESG报告,ESG标准,ESG指南,ESG中国,ESG投资,ESG咨询,ESG服务,ESG评级,ESG提升'}],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "All about ESG | ohESG | ESG 指南",
      description: "关于ESG，包括ESG的标准有哪些，公司应如何披露ESG、应用 ESG、提升ESG评级，提升公司价值。All about Environmental, Social, Governance and more.",
    },

  },


  theme,

  shouldPrefetch: false,

  
  plugins:[
   searchPlugin({
   searchMaxSuggestions: 10,
   locales: {
        '/': {
         placeholder: "搜索本站",
        },
      },
    }),
    ],
  
  
});