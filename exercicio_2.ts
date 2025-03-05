class ToDoList {
  tarefas: string[] = [];
  adicionarTarefa(tarefa: string): void {
    this.tarefas.push(tarefa);
    console.log(`Tarefa "${tarefa}" adicionada.`);
  }

  listarTarefas(): void {
    console.log('Lista de Tarefas:');
    this.tarefas.forEach((tarefa, index) => {
      console.log(`${index + 1}. ${tarefa}`);
    });
  }
  removerTarefa(index: number): void {
    if (index >= 0 && index < this.tarefas.length) {
      const tarefaRemovida = this.tarefas.splice(index, 1)[0];
      console.log(`Tarefa "${tarefaRemovida}" removida.`);
    } else {
      console.log('Índice inválido.');
    }
  }
}
const p = new ToDoList();

p.adicionarTarefa("Estudar TypeScript");
p.adicionarTarefa("Fazer exercícios de POO macaco");
p.adicionarTarefa("Fazer ocamecamehaaaaaaaaaaaaa");
p.listarTarefas();
p.removerTarefa(0);
p.listarTarefas();
