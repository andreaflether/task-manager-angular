import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()

export class InMemoryTaskDataService implements InMemoryDbService {
  createDb() {
    let tasks = [
      { id: 1, title: 'Reassistir POI', deadline: '01/25/2021 15:00' },
      { id: 2, title: 'Passar pra liga Prata III', deadline: '01/25/2021 15:00' },
      { id: 3, title: 'Parar de ser trouxa', deadline: '01/25/2021 15:00' },
      { id: 4, title: 'Parar de ser c***** de m*******', deadline: '01/25/2021 15:00' },
      { id: 5, title: 'Ignorar a existência de certas pessoas', deadline: '01/25/2021 15:00' }
    ];

    return { tasks };
  }
}