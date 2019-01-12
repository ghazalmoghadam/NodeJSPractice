var express= require("Express");
var app= new express();
//var bodyparser= require("body-parser");




//app.use(bodyparser());
//app.use(express.static(__dirname+"/static"));

  app.use("/",function(req,res,next){
    console.log(1);
    next();
  });
 app.get("/",function(req,res,next){
    console.log("home Mid");
    res.sendFile(__dirname+"/static/home.html");
 });
 
 app.get("/login",function(req,res,next){
    console.log("login Mid");
    res.sendFile(__dirname+"/static/login.html");
 });
app.listen(3088);
console.log("app is runing on port 3088");
