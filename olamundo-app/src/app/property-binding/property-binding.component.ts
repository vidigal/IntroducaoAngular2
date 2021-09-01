import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  imageUrl: string = "https://picsum.photos/800/600";
  nome = "Victor Vidigal Ribeiro";
  marcado: boolean = true;
  classe_titulo = "titulo_vermelho";

  constructor() { }

  ngOnInit(): void {
    // Executa uma função depois de aguardar x milisegundos
    setTimeout(() => {
      this.nome = "Outro nome qualquer";
    }, 3000);

    // Executa uma função a cada x milisegundos
    setInterval(() => {
      this.marcado = !this.marcado;
    }, 1000);

    setInterval(() => {
      if (this.classe_titulo == 'titulo_vermelho') {
        this.classe_titulo = 'titulo_azul';
      } else {
        this.classe_titulo = 'titulo_vermelho';
      }

    }, 1000)

  }

}
