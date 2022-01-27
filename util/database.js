const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callBack) => {
  MongoClient.connect('mongodb+srv://Skhoooler:347821597dD@backend-web-dev-ii.zxs2i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(client => {
    console.log('MongoDB Connected');

    _db = client.db();
    callBack();
  })
  .catch(err => {
    console.log(`MongoDB Error: ${err}`);
    throw(err);

  });
}

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;