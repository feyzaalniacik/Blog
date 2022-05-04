const express = require('express');
const router = express.Router();


router.get("/", (req, res) => { // '/' ana sayfa anlamına gelir. / kısmını dinler
    res.render('home'); //çalıştırınca home.ejs sayfası aktif olur
}) 


module.exports = router;
