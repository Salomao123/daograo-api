"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProdutosSchema extends Schema {
  up() {
    this.create("produtos", table => {
      table.increments();

      table
        .integer("deposito_id")
        .references("id")
        .inTable("depositos")
        .notNullable();

      table.string("nome").notNullable();
      table.string("categoria").notNullable();
      table.string("subcategoria").notNullable();
      table.integer("valor_unidade").notNullable();
      table.string("unidade").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("produtos");
  }
}

module.exports = ProdutosSchema;
