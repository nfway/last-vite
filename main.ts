import { serveStatic } from "https://deno.land/std/http/file_server.ts";

const PORT = 8080;

const sitePath = "./path/to/your/site/folder";

const server = serveStatic(sitePath);

console.log(`Server running on http://localhost:${PORT}`);

for await (const request of server) {
  await request.respond();
}
