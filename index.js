const express = require("express");
const dbConfig = require("./DBconfig/DB"); 


//create an express app
const app = express(); 

//create a port
const port = 2020;  
  
//middleware to parsenincoming request bodies 
app.use(express.json());

//database connection
dbConfig()


//start server
const server = app.listen(() =>{
    console.log(`server is running on port ${port}`);
});

