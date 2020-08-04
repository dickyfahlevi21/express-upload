const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// mongoose.connect("mongodb://localhost/uploads", { useNewUrlParser: true });
mongoose.connect("mongodb://localhost:27017/todo-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const userSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  photo: String,
  description: String,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;