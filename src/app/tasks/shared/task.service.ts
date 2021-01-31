import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Task } from './task.model';

@Injectable()

export class TaskService {
  public tasksUrl = 'http://api.task-manager.test:3000/tasks';
  public headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http) { } 

  getAll(): Observable<Task[]> {
    return this.http.get(this.tasksUrl)
      .catch(this.handleErrors)
      .map((response: Response) => response.json().data as Task[])
  }

  getImportant(): Observable<Task[]> {
    return this.getAll()
      .catch(this.handleErrors)
      .map(tasks => tasks.slice(0, 3));
  }
  
  getById(id: number): Observable<Task> {
    let url = `${this.tasksUrl}/${id}`;

    return this.http.get(url)
      .catch(this.handleErrors)
      .map((response: Response) => response.json().data as Task)  
  }

  create(task: Task): Observable<Task> {
    let url = this.tasksUrl;
    let body = JSON.stringify(task);

    return this.http.post(url, body, { headers: this.headers })
      .catch(this.handleErrors)  
      .map(response => response.json().data as Task)
  }

  update(task: Task): Observable<Task> {
    let url = `${this.tasksUrl}/${task.id}`;
    let body = JSON.stringify(task)

    return this.http.put(url, body, { headers: this.headers })
      .catch(this.handleErrors)
      .map(() => task)
  }

  delete(id: Number): Observable<null> {
    let url = `${this.tasksUrl}/${id}`;

    return this.http.delete(url, { headers: this.headers })
      .catch(this.handleErrors)
      .map(() => null)
  }

  searchByTitle(term: string): Observable<Task[]> {
    let url = `${this.tasksUrl}?title=${term}`;

    return this.http.get(url)
      .catch(this.handleErrors)
      .map((response: Response) => response.json().data as Task[])
  }

  private handleErrors(error: Response) {
    console.log("Saving error in log file - Error details => ", error)
    return Observable.throw(error);
  }
}