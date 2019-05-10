const express = require("express");
const router = express.Router();

//Example Routes
router.get("/sample", (req, res, next) => {
    res.send(`<h1>Hello from sample api route</h1>`);
});

router.get("/", (req,res,next) => {
    res.send(`<h1>Hello from api route!</h1>`);
});

module.exports = router;
