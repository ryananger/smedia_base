const mongoose = require('mongoose');
const url = process.env.MONGODB;
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.set('strictQuery', true);
mongoose.connect(url, options, function(a) {
  console.log('Connected to mongoDB.');
});

const userSchema = new mongoose.Schema({
  uid:       String, // from firebase auth
  username:  String,
  firstName: String,
  lastName:  String,

  createdOn: {type: Date, default: Date.now},

  email:     String,
  phone:     String,

  community: String,
  settings: Object,

  notifications: [Object],
  friends: [String],
  interactions: [Object],
  messages: [Object],
  posts:    [Object],
  events:   [Object]
});

const User = new mongoose.model('User', userSchema);

var models = {
  User: User
};

module.exports = models;