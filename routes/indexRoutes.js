const express = require('express');
const router = express.Router();


router.get("/", (req, res) => { // '/' ana sayfa anlamına gelir. / kısmını dinler
    res.send("Test ediyoruz");
}) 


module.exports = router;
