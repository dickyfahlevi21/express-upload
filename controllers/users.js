const UserModel = require("../models/user");
class UserController {
  static async photoUpload(req, res) {
    const { params, file, body } = req;
    // const photo = req.file.filename;
    const user = new UserModel({ title: body.nama, photo: file.filename });
    await user.save()
    // await UserModel.update({ photo }, { where: { id: req.body.userId } });
    // res.redirect("/users");
    res.json({ params, file, nama: body.nama });
  }
}

module.exports = UserController;
