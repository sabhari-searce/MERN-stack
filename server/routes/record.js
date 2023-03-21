const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/record").get( async function (req, res) {
 let db_connect = dbo.getDb("Invoice");
 let result = await db_connect
   .collection("Invoice")
   .find({})
   .toArray();
   res.send(result)
});


recordRoutes.route("/update").post(async function (req, response) {
  //console.log(req);
  let db_connect = dbo.getDb("Invoice");
  let myquery = { id: "1" };
  let newvalues = {
    $set: {
      paid : true
    },
  };
  let res = await db_connect
    .collection("Invoice")
    .updateOne(myquery, newvalues)
  //console.log(res)
  response.send(req)
 });
 

 
module.exports = recordRoutes;