const express = require("express");
const route = express();

const transferir = require("../controller/transacoes/transferir");
const depositar = require("../controller/transacoes/depositar");
const saque = require("../controller/transacoes/sacar");
const validarSenha = require("../middleware/middleware");
const criarConta = require("../controller/contas/criarConta");
const listarContas = require("../controller/contas/listarContas");
const atualizarUsuario = require("../controller/contas/atualizarUsuario");
const excluirConta = require("../controller/contas/excluirConta");
const consultarSaldo = require("../controller/contas/consultarSaldo");
const extrato = require("../controller/contas/extrato");

route.post("/transacoes/transferir", transferir);
route.post("/transacoes/depositar", depositar);
route.post("/transacoes/sacar", saque);
route.get("/contas", validarSenha, listarContas);
route.post("/contas", criarConta);
route.delete("/contas/:numeroConta", excluirConta);
route.put("/contas/:numeroConta/usuario", atualizarUsuario);
route.get("/contas/saldo", consultarSaldo);
route.get("/contas/extrato", extrato);

module.exports = route;
