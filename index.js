 import express from "express";
 import routes from "./routes/routes.js"; 
//import e from "express";

 const app=express();

 app.use(express.json() )
 app.use(express.urlencoded({exteded:true}))

 app.use(routes)


 app.listen(8080,()=> {
   console.log("🚀 ~ app.listen ~ 8080" )
   



 });