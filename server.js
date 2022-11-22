const express = require("express");
var cors = require('cors');
const app = express();

const corsConfig = {
  credentials: true,
  origin: 'https://localhost:3000',
};
app.use(cors(corsConfig));
// app.use(function (req, res, next) {

//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', 'https://kubernetes.docker.internal:3000');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);

//   // Pass to next layer of middleware
//   next();
// });
//route
const port = process.env.PORT || 9000;
app.get("/", (req, res) =>{
  res.cookie("testCookie","dumbChrome", { sameSite: 'Lax'})
  res.send("deployed in openshift using docker")
}
);


//start
app.listen(port, () => console.log(`node app started in termux on ${port}`));
