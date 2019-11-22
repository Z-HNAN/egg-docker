'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const userSchema = new Schema({
    username: String,
    password: String,
  });

  return mongoose.model('Users', userSchema);
};
