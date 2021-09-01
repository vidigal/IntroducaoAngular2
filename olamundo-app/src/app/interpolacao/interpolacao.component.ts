import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  templateUrl: './interpolacao.component.html',
  styleUrls: ['./interpolacao.component.css']
})
export class InterpolacaoComponent implements OnInit {

  nome: string = "Victor Vidigal Ribeiro";
  imageUrl: string = "https://picsum.photos/800/600";

  constructor() {
  }

  ngOnInit(): void {
  }

  getIdade(): number {
    return 35;
  }

}
