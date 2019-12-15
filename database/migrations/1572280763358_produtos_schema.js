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

      table
        .integer("categoria_id")
        .references("id")
        .inTable("categorias")
        .notNullable();

      table.string("tipo_produto").notNullable();
      table.string("codigo_barra").notNullable();
      table.string("subcategoria").notNullable();
      table.double("preco_produto").notNullable();
      table.double("valor_unidade").notNullable();
      table.string("unidade_medida").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("produtos");
  }
}

module.exports = ProdutosSchema;
