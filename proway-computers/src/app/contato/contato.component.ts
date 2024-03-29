import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  formContato = this.fb.group({
    // valor inicial vazio, e inicia um array devalidações tipo iniciar com no minimo 4 caracteres, e nome é obrigatotio
    nome: ["", [Validators.minLength(4), Validators.required]],
    assunto: ["", [Validators.minLength(10), Validators.required]],
    telefone: ["", [Validators.minLength(11), Validators.required]],
    email: ["", [Validators.email, Validators.required]],
    mensagem: ["", [Validators.minLength(20), Validators.required]]
  })

  ngOnInit(): void {
  }

  enviarFormulario(){
    alert('mensagem enviada')
    this.formContato.reset()
  }

}
