// main.tsx file

import { serveStatic } from "https://denopkg.com/soremwar/deno-static/mod.ts";

// Serve static files from docs/.vuepress/dist directory using serveStatic middleware
addEventListener("fetch", (event) => {
  event.respondWith(
    serveStatic(event.request, {
      root: "./src/.vuepress/dist",
      baseRoute: "/",
      indexDocument: "index.html",
    }),
  );
});
