# Tips

## Use vuepress not Vite

in package.json, use

```
"docs:build": "vuepress build src",
```

## Remove theme-hope's default logo

just remove those code

```yaml
//config.ts

alias: {
    "@IconDisplay": path.resolve(__dirname, "./components/IconDisplay"),
    "@KatexPlayground": path.resolve(__dirname, "./components/KatexPlayground"),
    "@theme-hope/components/HomeHero": path.resolve(
      __dirname,
      "./components/HopeHero"
    ),
  },
```

## Don't mess up with package-lock.json

When some error found, just remove package-lock.json , it will appear automatically 

## Don't want deploy to vercel?

create `vercel.json` with:

```json
{
  "github": {
    "enabled": false
  }
}
```

## Sidebar in Vuepress next

You can customize the sidebar item text, like this only:

```yaml
//sidebar.ts 

{
type: 'link',
text: 'Do not fuck',
link: 'i-will-not',          
},
```

Navbar should be easy:

```yaml
//navbar.ts

{ text: "title in nav", 
   prefix: "/criteria/",  //this will allow you ignore links prefix
   children: [
  { text: "OK1",
    link: "not-ok2", 
  },
  { text: "OK3",
   link: "not-ok4", 
  },
 { text: "OK5",
  link: "not-ok6", 
  },
    ],	
 }, 
```

## The fucking google-analytics plugin

In vuepress next, the plugin should customize in `themeConfig.ts` or `config.ts` like this:

```
  plugins: {
	'@vuepress/plugin-google-analytics':
      	{
        	id: 'G-5NDPDMT1LW',
      	},
    }  
```

The official documentation is wrong.

## Deploy

- Build command: `yarn docs:build`
- Output : `dist`
