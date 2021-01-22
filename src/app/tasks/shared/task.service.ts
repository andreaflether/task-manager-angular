import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Task } from './task.model';

@Injectable()

export class TaskService {
  public tasksUrl = 'api/tasks';

  constructor(private http: Http) { } 

  getTasks(): Observable<Task[]> {
    return this.http.get(this.tasksUrl)
      .catch(this.handleErrors)
      .map((response: Response) => response.json().data as Task[])
  }

  getImportantTasks(): Observable<Task[]> {
    return this.getTasks()
      .catch(this.handleErrors)
      .map(tasks => tasks.slice(0, 3));
  }
  
  getTask(id: number): Observable<Task> {
    let url = `${this.tasksUrl}/${id}`;

    return this.http.get(url)
      .catch(this.handleErrors)
      .map((response: Response) => response.json().data as Task)  
  }

  createTask(task: Task): Observable<Task> {
    let url = this.tasksUrl;
    let body = JSON.stringify(task);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(url, body, { headers: headers })
      .catch(this.handleErrors)  
      .map(response => response.json().data as Task)
  }

  updateTask(task: Task): Observable<Task> {
    let url = `${this.tasksUrl}/${task.id}`;
    let body = JSON.stringify(task)
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.put(url, body, { headers: headers })
      .catch(this.handleErrors)
      .map(() => task)
  }

  deleteTask(id: Number): Observable<null> {
    let url = `${this.tasksUrl}/${id}`;
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.delete(url, { headers: headers })
      .catch(this.handleErrors)
      .map(() => null)
  }

  private handleErrors(error: Response) {
    console.log("Saving error in log file - Error details => ", error)
    return Observable.throw(error);
  }
}