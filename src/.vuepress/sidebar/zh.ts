import { defineSidebarConfig } from "vuepress-theme-hope";

export const zhSidebarConfig = defineSidebarConfig({
	
'/about/':[         
	{
		title: 'ESG介绍',   // 一级菜单名称
		collapsable: false, // false为默认展开菜单, 默认值true是折叠,
		sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
		children: [
		
		{
			type: 'link',
			text: 'ESG是什么',
			link: 'ESG',          
		},
		
		{
			type: 'link',
			text: 'ESG发展史',
			link: 'ESG-history',          
		},
	
		{
			type: 'link',
			text: 'ESG投资史',
			link: 'ESG-investment-history',          
		},

		],
	},
],

'/criteria/':[ 
	{
		title: 'ESG标准',
		collapsable: false, 
		sidebarDepth: 1, 
		children: [
		{
			type: 'link',
			text: 'ESG标准',
			link: 'ESG-Criteria',          
		},
		{
			type: 'link',
			text: 'ESG在中国',
			link: 'ESG-China',          
		},
		{
			type: 'link',
			text: '港交所ESG',
			link: 'hkex-ESG',          
		},
		{
			type: 'link',
			text: '港交所ESG解读',
			link: 'hkex-new-esg-guide-2019',          
		},
		{
			type: 'link',
			text: 'ESG政策更新',
			link: 'ESG-update',          
		},	

	  ],
	},
],
 
'/apply/':[
	{
		title: 'ESG应用',
		collapsable: false, 
		sidebarDepth: 1, 
		children: [
		
		{
			type: 'link',
			text: '以ESG实现监管',
			link: 'ESG-as-supervision.md',          
		},		
		
		{
			type: 'link',
			text: 'ESG评级',
			link: 'ESG-rating.md',          
		},		

		{
			type: 'link',
			text: '作为投资工具',
			link: 'ESG-investment.m',          
		},		
		{
			type: 'link',
			text: '作为沟通工具',
			link: 'ESG-communicate.md',          
		},		
		{
			type: 'link',
			text: 'ESG投资与价值',
			link: 'ESG-investment-and-social-value',          
		},
		{
			type: 'link',
			text: 'ESG研究报告',
			link: 'ESG-research-reports',          
		},		

		{
			type: 'link',
			text: 'MSCI 评级',
			link: 'MSCI-ESG-Rating-Methology-Chinese',          
		},		
		{
			type: 'link',
			text: '投资者需要什么ESG信息',
			link: 'ESG-investor-need',          
		},		
		{
			type: 'link',
			text: '绿色债券指南',
			link: 'Green-bond-definition-priciples-reporting',          
		},	
	  ],
	},
],

'/how/':[
	{
		title: 'ESG披露实践',   // 一级菜单名称
		collapsable: false, // false为默认展开菜单, 默认值true是折叠,
		sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
		children: [
		{
			type: 'link',
			text: 'ESG披露指南',
			link: 'ESG-guide.md',          
		},		
		
		{
			type: 'link',
			text: '帮助',
			link: 'contact',          
		},		
	
	  ],
	}
],
				
	

});
