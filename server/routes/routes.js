const express = require("express");
const router = express.Router();

//Example Route - GET
router.get("/sample", (req, res, next) => {
    res.send(`<h1>Hello from sample api route</h1>`);
});

//Example Route - POST
router.post("/sample", (req, res, next) => {
    res.send(`<h1>POST, something should be created...</h1>`);
});

//Example Route - PUT
router.put("/sample", (req, res, next) => {
    res.send(`<h1>PUT, somethign should be updated...</h1>`);
});

//Example Route - DELETE
router.delete("/sample", (req, res, next) => {
    res.send(`<h1>DELETE, something should be deleted...</h1>`);
});

router.get("/", (req,res,next) => {
    res.send(`<h1>Hello from api route!</h1>`);
});

module.exports = router;
