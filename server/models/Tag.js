const { Schema, model } = require("mongoose");

const tagSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 25,
  },
  // used: {
  //   type: Number,
  //   default: 0,
  // },
});


module.exports = tagSchema;