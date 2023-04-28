const express = require('express');
const uploadrouter = new express.Router();


uploadrouter.get("/", async(req, res)=>{
    try {
         express.static('./uploads');   
    } catch (error) {
        res.status(401).json({error, msg: "cannot get uploaded imgage"})
    }
});



module.exports = uploadrouter ;