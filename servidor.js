const express = require('express');
const mainRoutes=require('./routes/routes-main');

var methodOverride = require('method-override')
const bodyParser = require('body-parser');
const app = express();

//use
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

///set

app.set('views',__dirname+'/views')
app.set('public',__dirname+'/public')
app.set('view engine','ejs');
app.use('/main',mainRoutes);
//
app.set('trust proxy', 1) // trust first proxy
///////////////

var port =process.env.PORT || 8080;

const server = app.listen(port,()=>{
    console.log("Servidor Droguería -- :) -- ");
});
