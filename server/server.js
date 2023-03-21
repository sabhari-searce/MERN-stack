const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, async () => {
  // perform a database connection when server starts
  await dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});

app.get("/record",(req,res) => {
    
    let db_connect = dbo.getDb("Invoice");
    console.log(db_connect)
 db_connect
   .collection("Invoice")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
})