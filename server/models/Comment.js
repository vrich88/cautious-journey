const { Schema, model } = require("mongoose");
const { User } = require("./User");

// how set up relationship with parents post
// how set up relationship with commenting user
// how to do equivalent of hasMany etc?
// how are these upvotes working
// how is the date stuff working

const commentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.ObjectId,
    ref: "Post",
    required: true,
  },
  comment: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 2500,
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  votes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
