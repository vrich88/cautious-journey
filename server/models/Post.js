const { Schema, model } = require("mongoose");
// const { User } = require("./User");
const tagSchema = require("./Tag");

// look into react-moment dependency and how modify Moment tag on front end

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 80,
  },
  body: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 5000,
    required: true,
  },
  // user logic
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment",
    required: false,
  }],
  // views: {
  //   type: Number,
  //   default: 1,
  //   min: 1,
  // },
  // votes: {
  //   type: [Schema.Types.ObjectId],
  //   ref: "User",
  //   default: [],
  // },
  timePosted: {
    type: Date,
    default: Date.now,
  },
  tag: {tagSchema}
});

// postSchema.virtual('user').get(function () {

// })

const Post = model("Post", postSchema);

module.exports = Post;
