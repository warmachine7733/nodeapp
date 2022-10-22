const express = require("express");
const app = express();
const port = 8080

//route
app.get("/", (req, res) =>
  res.send("I am running in android phone in termux app")
);

//start
app.listen(port, () => console.log(`node app started in termux on ${port}`));
