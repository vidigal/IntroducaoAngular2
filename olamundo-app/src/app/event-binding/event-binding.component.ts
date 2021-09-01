import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  iptExemplo2Value: string = '';

  iptExemplo3Value: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  btnExemplo1OnClick() {
    alert("Clicou no botão 1!");
  }

  iptExemplo2OnKeyUp(valor: string) {
    this.iptExemplo2Value = valor;
  }

  iptExemplo3OnKeyUp(valor: string) {
    this.iptExemplo3Value = valor;
  }

  btnNomeOnClick(nome: string) {
    alert(nome);
  }

}
