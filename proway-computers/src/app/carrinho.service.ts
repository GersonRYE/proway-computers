import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho(){
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
    
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho){
    this.itens.push(produto)
    localStorage.setItem("carrinho", JSON.stringify(this.itens))
  }

  removerProdutoCarrinho(produtoId: number) {
    // filter percorre todo o vetor de itens, disponibilizando o item especifico
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho(){
    this.itens = []
    localStorage.clear()
  }
}
