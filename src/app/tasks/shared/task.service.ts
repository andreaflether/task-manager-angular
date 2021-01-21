import { Http } from '@angular/http';
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
  getTasks(): Promise<Task[]> {
    let promise = new Promise((resolve, reject) => {
      if(TASKS.length > 0) {
        resolve(TASKS);
      } else {
        let error_msg = "No tasks to display."
        reject(error_msg);
      }
    })
    return promise;
  }

  getImportantTasks(): Promise<Task[]> {
    return Promise.resolve(TASKS.slice(0, 3))
  }
  
  getTask(id: number): Promise<Task> {
    return this.getTasks()
      .then(tasks => tasks.find(task => task.id === id))
  }
}

