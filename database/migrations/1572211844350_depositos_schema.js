"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class DepositoSchema extends Schema {
  up() {
    this.create("depositos", table => {
      table.increments();
      table.string("deposito_nome").notNullable();
      table.integer("deposito_cep").notNullable();
      table.string("deposito_bairro").notNullable();
      table.string("deposito_municipio").notNullable();
      table.string("deposito_uf_estado").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("depositos");
  }
}

module.exports = DepositoSchema;
