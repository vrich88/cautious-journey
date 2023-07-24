const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");


const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // match: [/.+@.+..+/, "Must be a valid email address"],
  },
  password: {
    type: String,
    required: true,
    // make sure this works
    // match: [/"^(?=.[a-z])(?=.[A-Z])(?=.d)(?=.[@$!%?&])[A-Za-zd@$!%?&]{8,}$"/],
  },
  // isAdmin: {
  //   type: Boolean,
  //   default: false,
  // },
  // comments: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Comment"
  //   }
  // ],
  // posts: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Post"
  //   }
  // ]
});

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;