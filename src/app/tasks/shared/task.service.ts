import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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
  public tasksUrl = 'api/tasks';

  constructor(private http: Http) { } 

  getTasks(): Observable<Task[]> {
    return this.http.get(this.tasksUrl)
      .map((response: Response) => response.json().data as Task[])
  }

  getImportantTasks(): Promise<Task[]> {
    return Promise.resolve(TASKS.slice(0, 3))
  }
  
  getTask(id: number): Observable<Task> {
    let url = `${this.tasksUrl}/${id}`;
    return this.http.get(url)
      .map((response: Response) => response.json().data as Task)  
  }
}

