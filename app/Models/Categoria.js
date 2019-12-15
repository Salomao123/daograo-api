"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Categoria extends Model {
  produto() {
    this.hasMany("App/Models/Produto");
  }
}

module.exports = Categoria;
