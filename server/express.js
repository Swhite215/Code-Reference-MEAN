const express = require("express");

const app = express();

//Middleware
app.use((req, res, next) => {
    console.log(req);
    console.log(res);
    console.log(next);

    //Call next to allow the request to travel onto the next middleware
    next();
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
