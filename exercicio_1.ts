class retangulo {
  calcularAreaRetangulo(largura: number, altura: number): number {
    return largura * altura;
  }

  exibirArea(largura: number, altura: number): void {
    const area = this.calcularAreaRetangulo(largura, altura);
    console.log(`A área do retângulo é: ${area}`);
  }
}
const p = new retangulo();
console.log(p.exibirArea(10, 5));
