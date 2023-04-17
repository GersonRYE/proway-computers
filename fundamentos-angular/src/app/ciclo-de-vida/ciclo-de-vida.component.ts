import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css'],
})
export class CicloDeVidaComponent implements OnInit,  OnChanges, OnDestroy{
  horario = new Date();
  timer: any = null;

  @Input() texto = ""

  constructor() {}
  

  ngOnInit(): void {
    console.log('O evento onInit disparou');
    this.timer = setInterval(() => (this.horario = new Date()), 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
  }

  // cancela o evento depois que a tela nao e mais utilizada
  ngOnDestroy(): void {
    clearInterval(this.timer)
  }

  

}
