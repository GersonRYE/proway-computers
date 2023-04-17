import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrls: ['./componente-pai.component.css']
})
export class ComponentePaiComponent {

  sobrenome = "da Silva"

  mostarNomeCompleto(nomeCompleto: any){
    alert(`O nome completo é: ${nomeCompleto}`);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
