"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Produto extends Model {
  deposito() {
    return this.belongsTo("App/Models/Deposito");
  }

  categoria() {
    return this.belongsTo("App/Models/Categoria");
  }
}

module.exports = Produto;
