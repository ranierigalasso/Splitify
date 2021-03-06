const mongoose = require('mongoose');

const { Schema } = mongoose;

const { ObjectId } = Schema.Types;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  imgPath: {
    type: String,
    default: 'https://i.imgur.com/gtWsPu9.jpg',
  },
  password: {
    type: String,
    required: true,
  },
  confirmationCode: {
    type: String,
    unique: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  myFriends: [{
    type: ObjectId,
    reference: 'User',
  }],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
