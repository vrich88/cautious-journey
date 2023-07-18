const { Schema, model } = require("mongoose");
// const { User } = require("./User");
const { User } = require("./User")
const {Comment} = require("./Comment")
const { tagSchema } = require("./Tag");

// look into react-moment dependency and how modify Moment tag on front end

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 80,
  },
  tags: {
    type: [tagSchema],
    required: true,
  },
  body: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 5000,
    required: true,
  },
  // user logic
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  comments: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Comment",
    required: false,
  }
  views: {
    type: Number,
    default: 1,
    min: 1,
  },
  // votes: {
  //   type: [mongoose.Schema.Types.ObjectId],
  //   ref: "User",
  //   default: [],
  // },
  time: {
    type: Date,
    default: Date.now,
  },
});

// postSchema.virtual('user').get(function () {

// })

const Post = model("Post", postSchema);

module.exports = Post;
