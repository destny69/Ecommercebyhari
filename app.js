const express= require("express");

const app = express();
const path = require('path');
const authRoutes = require('./routes/auth.routes');
const db =require('./data/database');
app.use(authRoutes);
app.use(express.static('public'));

app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

db.connectToDatabase().then(function(){
    app.listen(3000);
}).catch(function(error){
    console.log('Failed to connect to the database');
    console.log(Error);
});