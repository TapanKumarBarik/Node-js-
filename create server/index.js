const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  return res.end("hello from the server");
});

server.listen(3000, () => {
  console.log("server is listening on post 3000");
});
