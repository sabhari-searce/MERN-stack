const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
let _db;


 //modules for connecting to mongo db and getting the mongo db instance
module.exports = {
    
  connectToServer: async function (callback) {
    try {
        await client.connect() 
        
        
    } catch (error) {
        console.log(error)
    }
    
  },
 
  getDb: function () {
    return client.db('Invoice');
  },
};


