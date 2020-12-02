// you can import a module using the 'require' func
const express = require("express");
const app = express();
// between 0~65535, you can set port number
const PORT = process.env.PORT || 4000;

// in order to print out the server's response, use app.get method
app.get("/", (req, res) => {
  res.send("Response OK!");
});

app.listen(PORT, () => {
  console.log("Server on : http://localhost:${PORT}/");
});
