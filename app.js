///jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")     //made a module which passes to this and then day= date() function runs the module code
const app = express();


let items = ["Buy Groceries","Eat Meal","Hit the Gym"];
let workItems = [];

app.set("view engine", "ejs");    ///telling app to use ejs as the view engine

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){

   let day = date.getDate();

   res.render("list", {listTitle: day, newListItems: items});  //// list file is rendered and key is the mark in list.js file and value will be day

});

  app.post("/",function(req,res){

    let item = req.body.newItem;

    if(req.body.list==="Work"){
      workItems.push(item);
      res.redirect("/work");
    }
    else{
      items.push(item);
      res.redirect("/");
    }
});

app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List",newListItems: workItems});
});

app.post("/work",function(req,res){
  let item = req.body.newItem;
  workItems.push(item);

  res.redirect("/work");
});

app.get("/about",function(req,res){
  res.render("about");
});

app.listen(3000,function(){
  console.log("server started at port 3000");
});
