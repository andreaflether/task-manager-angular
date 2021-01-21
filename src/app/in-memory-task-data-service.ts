import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()

export class InMemoryTaskDataService implements InMemoryDbService {
  createDb() {
    let tasks = [
      { id: 1, title: 'Reassistir POI' },
      { id: 2, title: 'Passar pra liga Prata III' },
      { id: 3, title: 'Parar de ser trouxa' },
      { id: 4, title: 'Parar de ser c***** de m*******' },
      { id: 5, title: 'Ignorar a existência de certas pessoas' }
    ];

    return { tasks };
  }
}