"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class VendedoresSchema extends Schema {
  up() {
    this.create("vendedores", table => {
      table.increments();
      table.string("nome_completo").notNullable();
      table.string("email").notNullable();
      table.string("senha").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("vendedores");
  }
}

module.exports = VendedoresSchema;
