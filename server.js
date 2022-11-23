const express = require("express");
var cors = require('cors');
const app = express();

const corsConfig = {
  credentials: true,
  origin: true,
};
app.use(cors(corsConfig));

const port = process.env.PORT || 9000;
app.get("/", (req, res) =>{
  res.cookie("testCookie","dumbChrome", { sameSite: 'none', secure: true,httpOnly:true})
  res.cookie("testCookie2","dumbChrome2", { sameSite: 'none', secure: true,httpOnly:true})


res.status(200).json({ahoy:true})
//  res.send("deployed in openshift using docker")
}
);


//start
app.listen(port, () => console.log(`node app started in termux on ${port}`));
