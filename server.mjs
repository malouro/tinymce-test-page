import { createReadStream } from "node:fs"
import { createServer } from "node:http"

const hostname = process.env.HOST ?? "localhost"
const port = process.env.PORT ?? 8080

const server = createServer((_req, res) => {
  res.writeHead(200, { "content-type": "text/html" })
  createReadStream("index.html").pipe(res)
})

server
  .listen(port, hostname)
  .on("listening", () => {
    console.log(`    Listening on http://${hostname}:${port}`)
  })
  .on("error", (error) => {
    console.error(`    ERROR: ${error.message}`)
  })
