// const express= require("express");

// const app = express();
// const path = require('path');
// const authRoutes = require('./routes/auth.routes');
// const db =require('./data/database');
// app.use(authRoutes);
// app.use(express.static('public'));

// app.use(express.urlencoded({extended:false}));
// app.set('view engine','ejs');
// app.set('views',path.join(__dirname,'views'));

// db.connectToDatabase().then(function(){
//     app.listen(3000);
// }).catch(function(error){
//     console.log('Failed to connect to the database');
//     console.log(Error);
// });

const express = require('express');
const path = require('path');
const authRoutes = require('./routes/auth.routes');
const db = require('./data/database');

const app = express();

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: false }));

// Serve static files
app.use(express.static('public'));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use routes
app.use(authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Connect to the database and start the server
db.connectToDatabase().then(function() {
  app.listen(3000, () => {
    console.log('Server is running on http://127.0.0.1:3000');
  });
}).catch(function(error) {
  console.log('Failed to connect to the database');
  console.error(error);
});
