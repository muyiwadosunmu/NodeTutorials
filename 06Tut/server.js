const express = require("express");
const app = express(); 
const path = require('path');
const PORT = process.env.PORT || 3500;


//This is just to send a respnse
/*app.get('/', (req,res) => {
     res.send("Hello Welcome to Express")
}); */

//This is to render a file like our index.html file
app.get('^/$|/index(.html)?', (req,res) => { 
    //res.sendFile('./views/index.html', {root: __dirname});
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/new-page(.html)?', (req,res) => { 
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

//to redirect a page
app.get('/old-page(.html)?', (req,res) => { 
    res.redirect(301,'new-page.html'); //302 by default
});

app.get('/*', (req,res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));