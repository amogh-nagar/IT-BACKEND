const express = require("express");
const app = express(); //return an object
const path = require("path");
const userroutes=require('./routes/userroutes')
const mongoose = require("mongoose");
const cors=require('cors')

//JSON
// app.use(express.json());
//Formdata
app.use(express.urlencoded({ extended: true }));
//   /user/login
app.use(cors());
app.use('/user',userroutes);

app.post("/", (req, res, next) => {
  console.log(req.body);
  res.send(req.body.title);
});

app.use("/", (req, res, next) => {
  //req,res - > Object, next -> function
  console.log(req);
  //   res.send({ title: "Hello" });
  res.sendFile(path.join(__dirname, "index.html"), () => {
    console.log("File sent!");
  });
});
// __dirname  = path of current directory/folder





mongoose
  .connect(
    "mongodb+srv://amogh:123amogh@cluster0.xeyyu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server initalised");
});
