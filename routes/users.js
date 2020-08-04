var express = require("express");

const uploadsMiddlewar = require("../middleware/uploads");
const UserControllers = require("../controllers/users");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  // res.send('respond router no');
  res.render("users/index");
});

router.post("/", uploadsMiddlewar.single("photo"), UserControllers.photoUpload);

module.exports = router;
