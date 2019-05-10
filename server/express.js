const express = require("express");

const app = express();
const apiRoutes = require("./routes");

//Middleware - Applies to all requests
app.use((req, res, next) => {
    console.log(req);
    console.log(res);
    console.log(next);

    //Call next to allow the request to travel onto the next middleware
    next();
});

//Routing - Example Path
app.use('/example', (req, res, next) => {
    res.send(`<h1>Welcome to Example Page</h1>`);
});

//Routing - Example File
app.use('/api', apiRoutes);

//Routing - Root Path
app.use('/', (req, res, next) => {
    res.send(`<h1>Hello</h1>`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
