// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   name: String,
//   email: {
//     type: String,
//     unique: true,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model("User", UserSchema);

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

  name: {
    type: String
  },

  email: {
    type: String,
    unique: true,
    required: true
  },

  password: {
    type: String,
    required: false // Google users layi password optional
  },

  photo: {
    type: String
  },

  provider: {
    type: String,
    default: "local" // local | google
  },

  googleId: {
    type: String
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("User", UserSchema);