"use strict";

const Cargo = use("App/Models/Cargo");

class CargoController {
  async index({ request, response }) {
    const cargos = await Cargo.all();

    return cargos;
  }

  async store({ request, response }) {
    const data = request.only(["nome_cargo"]);

    const cargos = await Cargo.create(data);

    return cargos;
  }
}

module.exports = CargoController;
