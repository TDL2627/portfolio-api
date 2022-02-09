var express = require("express");
var app = express();
const cors = require('cors')
app.use(cors());

app.get("/", function(req, res){
    res.send("This is home page");
});


const port = process.env.PORT || 2627;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});