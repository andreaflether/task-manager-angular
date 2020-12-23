import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Task Manager';
  task: Task = new Task(1, 'Root is alive')
}

export class Task {
  id: number
  title: string

  constructor(id: number, title: string) {
    this.id = id
    this.title = title
  }
}
