"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class VendasSchema extends Schema {
  up() {
    this.create("vendas", table => {
      table.increments();
      table.integer("user_id").notNullable();
      table.string("cliente").notNullable();
      table.string("descricao").notNullable();
      table.double("preco_venda").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("vendas");
  }
}

module.exports = VendasSchema;
