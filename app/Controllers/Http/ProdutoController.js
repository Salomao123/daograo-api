"use strict";

const Produto = use("App/Models/Produto");

class ProdutoController {
  async index({ request, response, view }) {
    const produtos = await Produto.query()
      .with("user")
      .fetch();

    return produtos;
  }

  async store({ request, auth }) {
    const data = request.only([
      "nome",
      "categoria",
      "subcategoria",
      "valor_unidade",
      "unidade"
    ]);

    const produtos = await Produto.create({ ...data, user_id: auth.user.id });

    return produtos;
  }

  async show({ params, request, response, view }) {}

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = ProdutoController;
