import { Component } from '@angular/core';

interface Segurado {
  nome: string;
  sexo: string;
  idade: number | null;
  valorAutomovel: number | null;
}

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
})
export class ApoliceComponent {
  segurado: Segurado = {
    nome: '',
    sexo: '',
    idade: null,
    valorAutomovel: null,
  };
  valorApolice: number | null = null;
  erro: string | null = null;

  calcularApolice(): void {
    if (
      !this.segurado.nome ||
      !this.segurado.sexo ||
      !this.segurado.idade ||
      !this.segurado.valorAutomovel
    ) {
      this.erro = 'Por favor, preencha todos os campos.';
      return;
    }
    this.erro = null;
    if (
      this.segurado.sexo === 'H' &&
      this.segurado.idade !== null &&
      this.segurado.idade <= 25
    ) {
      this.valorApolice =
        this.segurado.valorAutomovel !== null
          ? this.segurado.valorAutomovel * 0.15
          : null;
    } else if (
      this.segurado.sexo === 'H' &&
      this.segurado.idade !== null &&
      this.segurado.idade > 25
    ) {
      this.valorApolice =
        this.segurado.valorAutomovel !== null
          ? this.segurado.valorAutomovel * 0.1
          : null;
    } else if (this.segurado.sexo === 'M') {
      this.valorApolice =
        this.segurado.valorAutomovel !== null
          ? this.segurado.valorAutomovel * 0.08
          : null;
    }
  }
}
