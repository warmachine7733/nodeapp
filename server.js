const express = require("express");
var cors = require('cors');
const app = express();

app.use(cors());

//route
const port = process.env.PORT;
app.get("/", (req, res) =>{
  res.cookie("testCookie","dumbChrome", { sameSite: 'none', secure: true,httpOnly:true})
  res.send("deployed in openshift using docker")
}
);


//start
app.listen(port, () => console.log(`node app started in termux on ${port}`));
