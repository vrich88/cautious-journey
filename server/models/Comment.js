const { Schema, model } = require("mongoose");

// how set up relationship with parents post
// how set up relationship with commenting user
// how to do equivalent of hasMany etc?
// how are these upvotes working
// how is the date stuff working

const commentSchema = new Schema({
  // post: {
  //   type: Schema.ObjectId,
  //   ref: "Post",
  //   required: true,
  // },
  body: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 2500,
  },
  user: {
    type: Schema.ObjectId,
    ref: "User",
    required: true,
  },
  // votes: [{
  //   type: Schema.ObjectId,
  //   ref: "User",
  // }],
  timePosted: {
    type: Date,
    default: Date.now,
  },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;