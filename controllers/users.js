const UserModel = require("../models/user");
const express = require("express")
const pug = require("pug");
const {
  response
} = require("express");

class UserController {
  static async photoUpload(req, res) {
    const {
      params,
      file,
      body
    } = req;
    // const photo = req.file.filename;
    const user = new UserModel({
      title: body.nama,
      photo: body.filename
    });
    await user.save()

    await UserModel.update({
      photo
    }, {
      where: {
        id: req.body.userId
      }
    });
    console.log(user, ' ini userrrrrrr')
    res.redirect("/users");
    res.json({
      params,
      file,
      nama: body.nama
    });
  }

  static async addRendering(req, res) {
    console.log("addR")
  }

  static async addUser(req, res) {
    const {
      params,
      file,
      body
    } = req;
    let newUser = await new UserModel({
      name: body.name,
      description: body.description,
      status: 0,
      date: new Date(),
      imageFile: file
    });

    newUser.save().then(res.redirect('/users')).catch(error => res.send(error))
  }

  static async deleteOneUser(req, res) {
    UserModel.findByIdAndRemove({
        _id: req.params.id,
      })
      .then(response => res.redirect('/users'))
      .catch(error => error)
  }
}

module.exports = UserController;