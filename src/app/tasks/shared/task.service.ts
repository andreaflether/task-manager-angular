import { Injectable } from '@angular/core';

import { Task } from './task.model';

const TASKS: Task[] = [
  { id: 1, title: 'Reassistir POI' },
  { id: 2, title: 'Passar pra liga Prata III' },
  { id: 3, title: 'Parar de ser trouxa' },
  { id: 4, title: 'Parar de ser c***** de m*******' },
  { id: 5, title: 'Ignorar a existência de certas pessoas' }
];

@Injectable()

export class TaskService {
  public getTasks(): Array<Task> {
    return TASKS;
  }
}

