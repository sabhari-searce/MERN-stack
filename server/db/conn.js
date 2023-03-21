const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
let _db;

// const data = await client.db().collection('Invoice').find({}).toArray()
// console.log(data)
 
module.exports = {
    
  connectToServer: async function (callback) {
    //console.log("Entered here!!")
    try {
        await client.connect() 
        
        //console.log(_db);
        
        //function (err, db){
            // Verify we got a good "db" object
            //console.log("Entered here!!!!")
            // if (db)
            // {
            //   //_db = db.db("Invoice");
            //   console.log("Successfully connected to MongoDB."); 
            // }
           // return callback(err);
           //    });
        
    } catch (error) {
        console.log(error)
    }
    
  },
 
  getDb: function () {
    //console.log(_db)
    return client.db('Invoice');
  },
};


// const { MongoClient } = require('mongodb');

// const uri = 'mongodb+srv://sabhari:sabhari2000@invoicepayment.x9mnxea.mongodb.net/Invoice?retryWrites=true&w=majority';
// const client = new MongoClient(uri);

// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// }

// async function getCollection(collectionName) {
//   const db = client.db('Invoice');
//   return db.collection(collectionName);
// }

// module.exports = {
//   connectToDatabase,
//   getCollection,
// };
