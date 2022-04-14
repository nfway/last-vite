import { defineNavbarConfig } from "vuepress-theme-hope";

export const zhNavbarConfig = defineNavbarConfig([
 {
    text: "首页",
    icon: "home",
    link: "/",    
  },
 

 { text: "ESG介绍", 
   icon: "guide",
   prefix: "/about/"
   children:[
	{ text: "ESG是什么", link: "ESG", },
	{ text: "ESG发展史", link: "ESG-history",},
	{ text: "ESG投资史", link: "ESG-investment-history",},
	  
	],	
  }, 
 { text: "ESG标准", 
   icon: "define",
   prefix: "/criteria/"
   children: [
	 { text: "ESG标准",
	   link: "ESG-Criteria", 
	 },
	 { text: "ESG在中国", 
	   link: "ESG-China",
	 },
	 { text: "港交所ESG", 
	   link: "hkex-ESG",
	  },
	 { text: "政策更新",
   	   link: "ESG-update",
	   },
	],	
 }, 
  { text: "ESG评级", 
    icon: "rank",
	prefix: "/apply/"
    children:[
		{ text: "ESG评级", 
		  link: "ESG-rating",
		},
		{ text: "ESG投资", 
		  link: "ESG-investment",
		},
		{ text: "绿色债券", 
		  link: "Green-bond-definition-priciples-reporting",},
		{ text: "投资者需求", 
		  link: "ESG-investor-need",
		},
    ],
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
