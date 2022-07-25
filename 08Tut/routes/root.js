const express = require("express");
const router = express.Router();
const path = require('path');


//This is to render a file like our index.html file
router.get('^/$|/index(.html)?', (req,res) => { 
    //res.sendFile('./views/index.html', {root: __dirname});
    res.sendFile(path.join(__dirname,'..', 'views', 'index.html'));
});

router.get('/new-page(.html)?', (req,res) => { 
    res.sendFile(path.join(__dirname, '..', 'views', 'new-page.html'));
});

//to redirect a page
router.get('/old-page(.html)?', (req,res) => { 
    res.redirect(301,'new-page.html'); //302 by default
});

module.exports = router;