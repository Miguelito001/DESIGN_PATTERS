type Task = {
  descricao : String;
  concluida : Boolean;
};
class GerenciadorTarefas {
  contas: Task[] = [];
  adicionaTarefa(desc: string, estatus: boolean): void{
    this.contas.push({ descricao: desc, concluida: estatus });
    console.log(
      `ContTarefa ${desc} criada ${estatus}.`
    );
  }
  concluirTudo():void{
    this.contas.forEach((i) => {
        console.log(i)
    });
  }
  
}
const p = new GerenciadorTarefas();

p.adicionaTarefa("123", false);
p.concluirTudo();
p.sacar(123, 200);
p.consultarSaldo(123);
