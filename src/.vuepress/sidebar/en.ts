import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "Demo",
      prefix: "demo/",
      link: "demo/",
      children: [
		{
			type: 'text',
			text: 'ESG标准',
		         
		},
		{
			type: 'link',
			text: 'ESG在中国',
			link: 'esg-china',          
		},
		{
			type: 'link',
			text: '港交所ESG',
			link: 'hkex-esg',          
		},
		{
			type: 'link',
			text: '港交所ESG解读',
			link: 'hkex-new-esg-guide-2019',          
		},
		{
			type: 'link',
			text: 'ESG政策更新',
			link: 'esg-update',          
		},	
         {
			type: 'link',
			text: 'GRI 标准',
			link: 'gri',          
		},
        {
			type: 'link',
			text: 'SASB 准则',
			link: 'sasb',          
		},	
        {
			type: 'link',
			text: 'IFRS 可持续披露准则',
			link: 'ifrs-sustainability-disclosure-standards',          
		},	
		{
			type: 'link',
			text: 'TCFD 气候相关财务披露',
			link: 'tcfd',          
		},	
		
		{
			type: 'link',
			text: 'SFDR 可持续金融信息披露',
			link: 'sfdr',          
		},
		{
			type: 'link',
			text: '欧盟 CSRD ',
			link: 'csrd',          
		},
	  ],
    },
    
    {
      text: "Docs",
      icon: "note",
      prefix: "guide/",
      children: "structure",
    },
    "slides",
  ],
});
