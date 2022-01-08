const { MongoClient } = require('mongodb');

class MongoDatabase{
  constructor(){
    const url = "mongodb://127.0.0.1:27017/quick-note";
    this.client = new MongoClient(url);
  }

  async init(){
    await this.client.connect();
    console.log("Connected");

    this.db = this.client.db;
    //var collection = this.db.collection("notes");
    var test = {
      name: "John",
      age: 25
    }

  //  const result = await this.client.db.collection("test-collection").insertOne(test);

    this.db.createCollection("test-collection", function(err, res){
      
    })

  }
}

module.exports = new MongoDatabase();
