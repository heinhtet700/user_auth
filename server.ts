import fs from "fs";
import http, { IncomingMessage, ServerResponse } from "http";
import { user } from "./types";
const PORT = 5000;

const users: user[] = [];

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url,
      method = req.method;
    if (url == "/") {
      const data = fs.readFileSync("index.html");
      res.write(data);
      res.end();
    } else if (url == "/css/style.css") {
      const data = fs.readFileSync("css/style.css");
      res.write(data);
      res.end();
    } else if (url == "/js/script.js") {
      const data = fs.readFileSync("js/script.js");
      res.write(data);
      res.end();
    } else if (url == "/users") {
      switch (method) {
        case "POST":
          let data = "";
          req.on("data", (chunk) => {
            data += chunk;
          });
          req.on("end", () => {
            const req_data = JSON.parse(data);
            users.push(req_data);
            res.write(JSON.stringify(users));
            res.end();
          });
          break;
        default:
          break;
      }
    }
  }
);
server.listen(PORT, () => {
  console.log(`server is linstening on ${PORT}`);
});
