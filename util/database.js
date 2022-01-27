const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const cors = require('cors');

let _db;


/* Not Part of Academind. This is for Heroku */
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb+srv://Skhoooler:347821597dD@backend-web-dev-ii.zxs2i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const corsOptions = {
  origin: "doria-web-backend-dev-2.herokuapp.com",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4
};
/* Not Part of Academind. This is for Heroku */


const mongoConnect = (callBack) => {
  MongoClient.connect(MONGODB_URL, options)
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