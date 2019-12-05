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

  async getUser({ request, response }) {
    try {
      const { email } = request.params;

      const users = await User.findByOrFail("email", email);

      return users;
    } catch (err) {
      return response.send({ error: { message: err.message } });
    }
  }
}

module.exports = UserController;
