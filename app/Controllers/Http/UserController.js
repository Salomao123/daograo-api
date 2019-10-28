"use strict";

const User = use("App/Models/User");

class UserController {
  async index({ request, response }) {
    const users = await User.all();
    return users;
  }

  async store({ request, response }) {
    try {
      const data = request.only(["username", "email", "password"]);
      const users = await User.create(data);
      return users;
    } catch (err) {
      return response.send({ error: { mesage: err.message } });
    }
  }
}

module.exports = UserController;
