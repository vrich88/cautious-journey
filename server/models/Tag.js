const { Schema, model } = require("mongoose");

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 25,
  },
  used: {
    type: Number,
    default: 0,
  },
});

const Tag = model("Tag", tagSchema);

module.exports = Tag;
module.exports = tagSchema;