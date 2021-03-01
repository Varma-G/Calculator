const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res){
  //console.log(req.body);
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var result = n1 + n2;
  res.send("The Calculation Result is:" + result);
});
//--------------------
// BMI Calculator Section
app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
  var mass = Number(req.body.weight);
  var height = Number(req.body.height);
  var BMIResult = mass / (height * height);
  res.send("Your BMI is : " + BMIResult);
});
//---------------------
app.listen(3000,function(){
  console.log("Server is running on port 3000..");
});
