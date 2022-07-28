const express = require("express");
const app = express(); 
const path = require('path');
const cors = require('cors');
const corsOptions = require("./config/corsOptions");
const { logger } = require('./middleware/logEvents');
const errorHandler  = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3300;


app.use(logger);

//2. custom middleware logger

//Cross Origin Resource Sharing
app.use(cors(corsOptions));


//1. built-in middleware to handle urlencoded data
// in other words, form data:
// 'content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

//built in middleware for json
app.use(express.json());

//server static files
app.use('/',express.static(path.join(__dirname, '/public')));

//routes
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));


app.use('/employees', require('./routes/apis/employees'));

//This is just to send a respnse
/*app.get('/', (req,res) => {
     res.send("Hello Welcome to Express")
}); */



//app.use("/") does not accept regex, app.all() could be used for routing.
app.all('*', (req,res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } 
    else if (req.accepts('json')) {
        res.json({error: "404 Not Found"});
    } else {
        res.type('txt').send("404 Not Found")
    }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));