"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class DepositoSchema extends Schema {
  up() {
    this.create("depositos", table => {
      table.increments();
      table.string("nome");
      table.string("rua").notNullable();
      table.integer("numero").notNullable();
      table.string("bairro").notNullable();
      table.string("municipio").notNullable();
      table.string("uf_estado").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("depositos");
  }
}

module.exports = DepositoSchema;
