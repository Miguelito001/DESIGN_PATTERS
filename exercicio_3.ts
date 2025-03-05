type Conta = {
  numero: number;
  saldo: number;
};
class nome {
  contas: Conta[] = [];

  criarConta(numero: number, saldoInicial: number): void {
    this.contas.push({ numero, saldo: saldoInicial });
    console.log(
      `Conta ${numero} criada com saldo inicial de R$${saldoInicial}.`
    );
  }

  depositar(numeroConta: number, valor: number): void {
    const conta = this.contas.find(c => c.numero === numeroConta);
    if (conta) {
      conta.saldo += valor;
      console.log(
        `Depósito de R$${valor} realizado na conta ${numeroConta}. Novo saldo: R$${conta.saldo}.`
      );
    } else {
      console.log('Conta não encontrada.');
    }
  }

  sacar(numeroConta: number, valor: number): void {
    const conta = this.contas.find(c => c.numero === numeroConta);
    if (conta) {
      if (conta.saldo >= valor) {
        conta.saldo -= valor;
        console.log(
          `Saque de R$${valor} realizado na conta ${numeroConta}. Novo saldo: R$${conta.saldo}.`
        );
      } else {
        console.log('Saldo insuficiente.');
      }
    } else {
      console.log('Conta não encontrada.');
    }
  }

  consultarSaldo(numeroConta: number): void {
    const conta = this.contas.find(c => c.numero === numeroConta);
    if (conta) {
      console.log(`Saldo da conta ${numeroConta}: R$${conta.saldo}.`);
    } else {
      console.log('Conta não encontrada.');
    }
  }
}
const p = new nome();

p.criarConta(123, 1000);
p.depositar(123, 500);
p.sacar(123, 200);
p.consultarSaldo(123);
