const http = require("http");
const fs = require("fs");

function requestListener(req, res) {
    //Request Information
    console.log(req);
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);

    //Variables
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        //Response Information
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>Hello World</h1>");
        res.write(
            "<form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form>"
        );
        return res.end();
    }

    if (url === "/message" && method === "POST") {
        let body = [];

        req.on("data", chunk => {
            body.push(chunk);
        });

        req.on("end", () => {
            console.log(body); //Buffer Array
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody); //Parsed Buffer Array String
            const message = parrsedBody.split("=")[1];
            fs.writeFileSync("message.txt", message);
        });
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
    }
}

const server = http.createServer(requestListener);

server.listen(3000, () => {
    console.log("Server listenig on Port 3000");
});
