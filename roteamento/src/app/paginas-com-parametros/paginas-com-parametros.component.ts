import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paginas-com-parametros',
  templateUrl: './paginas-com-parametros.component.html',
  styleUrls: ['./paginas-com-parametros.component.css'],
})
export class PaginasComParametrosComponent implements OnInit {
  id: number | null = null;
  idade: number | null = null
  nome: string | null = ""

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });

    this.route.queryParamMap.subscribe(params => {
      this.idade = Number(params.get("idade"))
      this.nome = params.get("nome")
    })

  }
}
