const express = require("express");
const app = express();
const port = 8080

//route
app.get("/", (req, res) =>
  res.send("deployed in openshift using docker")
);

//start
app.listen(port, () => console.log(`node app started in termux on ${port}`));
