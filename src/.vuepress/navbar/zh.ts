import { defineNavbarConfig } from "vuepress-theme-hope";

export const zhNavbarConfig = defineNavbarConfig([
 {
    text: "首页",
    icon: "home",
    link: "/",    
  },

 { text: "ESG介绍", 
   icon: "guide",
   prefix: "/about/",
   children:["ESG","ESG-history","ESG-investment-history"],	
  }, 
 { text: "ESG标准", 
   icon: "define",
   prefix: "/criteria/",
   children: ["ESG-Criteria", "ESG-China","hkex-ESG","ESG-update"],	
 }, 
  { text: "ESG评级", 
    icon: "rank",
	prefix: "/apply/",
    children:["ESG-rating","ESG-investment","Green-bond-definition-priciples-reporting","ESG-investor-need"],
  }, 
 		
           			
  {
	text: "帮助/关于",  //默认显示        
	icon: "support",
	children: [
		{ text: "ESG服务", link: "/contact.md" ,},
		{ text: "SDGs 中文", link: "https://sdg.js.org", },
		{ text: "CSR服务", link: "https://3feng.im", },  
		{ text: "公益创投", link: "https://lib.3feng.im/venture-philanthropy/" ,}, 
		{ text: "基金会咨询", link: "https://lib.3feng.im/",},
		{ text: "作者简历", link: "https://zhou.3feng.im/",},
		],
   },
 
 
 
 
 
]);
