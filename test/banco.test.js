const Banco = require("../src/banco");

const conta1 = new Banco("Gabriel Morona", 1000);
const conta2 = new Banco("Alfredo Neves", 200);

test("Depositar valor na conta", () => {
  expect(conta1.depositar(500)).toStrictEqual(1500);
});

test("Sacar valor", () => {
  expect(conta1.sacar(500)).toStrictEqual(1000);
});

test("Transferir valor da conta", () => {
  conta1.transferir(500, conta2);
  expect(conta1.obterSaldo()).toStrictEqual(500);
  expect(conta2.obterSaldo()).toStrictEqual(700);
});

test("Obter histórico", () => {
  expect(conta1.obterHistorico()).toStrictEqual([
    { tipo: "Depósito", valor: 500 },
    { tipo: "Saque", valor: 500 },
    { tipo: "Saque", valor: 500 },
    { tipo: "Transferência", valor: 500, destino: "Alfredo Neves" },
  ]);
});

test("Define e verifica o limite de saque", () => {
  conta1.definirLimiteDeSaque(700);
  expect(conta1.verificarLimiteDeSaque(500)).toStrictEqual(true);
  expect(() => conta1.verificarLimiteDeSaque(800)).toThrow(
    "Saque acima do limite permitido"
  );
});

test("Adiciona valor em juros no saldo", () => {
  expect(conta1.aplicarJuros(20)).toStrictEqual(600);
});

test("Pagar uma conta", () => {
  expect(conta1.pagarConta(50, "Conta de luz")).toStrictEqual(550);
});

test("Obter total depositado", () => {
  expect(conta1.obterTotalDepositado()).toStrictEqual(500);
});
