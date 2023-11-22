export interface Pet {
  id: number;
  nome: string;
  tutor: string;
  dia: string;
  hora:string;
  tipo: number;
  procedimento: number;
  status: number;
}

export const dadosPets = [
  {
    id: 1,
    nome: "Bob",
    tutor: "(31) 90000 0000",
    dia: "02/11/2023",
    hora: "11:30",
    procedimento:1,
    tipo: 1,
    status: 0
  },
  {
    id: 2,
    nome: "Garfield",
    tutor: "(31) 91111 1111",
    dia: "03/11/2023",
    hora: "11:30",
    procedimento:4,
    tipo: 2,
    status: 0
  },
  {
    id: 3,
    nome: "Flash",
    tutor: "(31) 92222 2222",
    dia: "04/11/2023",
    hora: "11:30",
    procedimento:2,
    tipo: 1,
    status: 0
  },
  {
    id: 4,
    nome: "Mel",
    tutor: "(31) 93333 3333",
    dia: "05/11/2023",
    hora: "11:30",
    procedimento:3,
    tipo: 3,
    status: 0
  }
];



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/