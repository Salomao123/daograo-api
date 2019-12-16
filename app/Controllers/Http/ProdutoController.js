"use strict";

const Produto = use("App/Models/Produto");

class ProdutoController {
  async index({ request, response, view }) {
    const produtos = await Produto.query()
      .with("deposito")
      .fetch();

    return produtos;
  }

  async store({ request, auth }) {
    const data = request.only([
      "deposito_id",
      "categoria_id",
      "tipo_produto",
      "codigo_barra",
      "subcategoria",
      "preco_produto",
      "valor_unidade",
      "unidade_medida"
    ]);

    const produtos = await Produto.create({ ...data });

    return produtos;
  }

  async show({ params, request, response, view }) {}

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = ProdutoController;
