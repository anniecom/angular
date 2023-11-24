import { Component } from '@angular/core';

import { dadosPets } from './data/dados-pets';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent  {
  dadosPets = [...dadosPets];
  filtradosPets = [...dadosPets];

  concluir(dadosPets :any) {
  if(!(dadosPets.status == 1 )){
      dadosPets.status = 1;
    }
  }

  cancelar(dadosPets :any) {
    if(!(dadosPets.status == 2 )){
      dadosPets.status = 2;
    }
  }

  text: string = '';
  buscaNome() {
    
    var posPet = 0;
    this.filtradosPets = [];

    if(!this.text){
      this.filtradosPets = [...dadosPets];
      return;
    }

    let tamArray = dadosPets.length;
    for(let numPets = 0; numPets < tamArray; numPets++){

      let textbusca = this.text.toLowerCase();
      let nomePet = this.dadosPets[numPets].nome.toLowerCase();
        if(nomePet.startsWith(textbusca)){
          this.filtradosPets[posPet] = dadosPets[numPets];
          posPet++;
        }
    }

  }

}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/