const http = require("http");
const requestHandler = require("./httpRoutes");

const server = http.createServer(requestHandler);

server.listen(3000, () => {
    console.log("Server listenig on Port 3000");
});
