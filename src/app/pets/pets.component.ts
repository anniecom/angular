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


}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/