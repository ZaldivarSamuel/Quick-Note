const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

class MongoDatabase{
  constructor(){
     this.url = "mongodb://127.0.0.1:27017";
     this.client = new MongoClient(this.url);
  }
  async init(){

    await this.client.connect();
    console.log("Connected");

    this.db = this.client.db("quick-note");

  }
}

module.exports = new MongoDatabase();


// var test = {
//   name: "Cristina",
//   age: 24
// }
//
// const collection = this.db.collection("mytest");
// collection.insertOne(test);
