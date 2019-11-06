"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

//users: routes
Route.post("users", "UserController.store");

//Rota de login
Route.post("authentication", "AuthController.store");

//Grupo:
Route.group(() => {
  Route.resource("users", "UserController").apiOnly();

  Route.resource("produtos", "ProdutoController").apiOnly();

  Route.resource("vendas", "VendaController").apiOnly();

  Route.resource("deposito", "DepositoController").apiOnly();
}).middleware(["auth"]);
