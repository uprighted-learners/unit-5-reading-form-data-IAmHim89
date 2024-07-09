const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
//how to call your file within the folder express is in(static)
app.use(express.static("public"));

app.get("/first-word", (req, res) => {
  res.send();
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
