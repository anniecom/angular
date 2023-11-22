import { Component } from '@angular/core';

import { dadosPets } from './data/dados-pets';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent {
  dadosPets = [...dadosPets];

  concluir(dadosPets :any) {
    dadosPets.status = 1;
  }

  cancelar(dadosPets :any) {
    dadosPets.status = 2;
  }

  getImagem(tipo: number) {
    switch (tipo) {
      case 1:
        return '/home/anniecom/angular/src/app/pets/data/passaro.png';
      case 2:
        return '/home/anniecom/angular/src/app/pets/data/passaro.png';
      case 3:
        return '/home/anniecom/angular/src/app/pets/data/passaro.png';
      default:
        return '/home/anniecom/angular/src/app/pets/data/passaro.png'; // imagem padrão se o tipo não for 1, 2 ou 3
    }
  }

}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/