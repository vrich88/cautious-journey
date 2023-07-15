const { Schema, model } = require("mongoose");
const { User } = require("./User");
const { tagSchema } = require("./Tag");

// should post be exported separately from user (unlike 21)?
// how to do equivalent of hasMany etc?
// the author's type property
// how are these upvotes working

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 80,
  },
  tags: {
    type: [tagSchema],
    required: true,
  },
  body: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 5000,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  views: {
    type: Number,
    default: 1,
    min: 1,
  },
  upvotes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

const Post = model("Post", postSchema);

module.exports = Post;
