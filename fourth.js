const express =  require("express");
//Initializing the express package and including it in tis application fourth.js.
const fourth= express();
 
const midWare1= function (req , res, next) {
    // MiddleWares are used to execute a function before the response is sent back to the user
    // A middleWare consists of three parameters which are of request , response and next .
    // MiddleWare helps us to check the parameters and also does security checks about data incoming and outgoing from the DB and variables and so on.
    // In this we use middle ware 1 .
    console.log("This is Middle Ware 1 !.");
    res.send("MiddleWare-1.This is Middle Ware 1 !.");
    next();
    // next is a parameter which is used to execute the remaining functions in which middlewares are declared
}



fourth.use(midWare1)
// fourth.use() command is used, so that the whole aplication can use the middleWare function mentioned in it.


fourth.get("./one", function (req,res) {
    res.send("Page One .......using Middle Ware-1 !.");
});

fourth.get("./two", function (req,res) {
    res.send("Page Two .......using Middle Ware-1 !.");
});

fourth.get("./three",function (req,res) {
    res.send("Page Three .......using Middle Ware-1 !.");
});

const midWare2= function (req , res, next) {
    console.log("This is Middle Ware 2 !.");
    res.send("MiddleWare-2.This is Middle Ware 2 !.");
    next();
};

fourth.use(midWare2);

fourth.get("./four",midWare2, function (req,res) {
    res.send("Page Four .......using Middle Ware-2 and Middle Ware-1!.");
});

fourth.get("./five",midWare2, function (req,res) {
    res.send("Page Five .......using Middle Ware-2 and Middle Ware-1 !.");
});

fourth.listen(40015);