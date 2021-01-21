import { Component, OnInit } from '@angular/core';

import { Task } from './shared/task.model';
import { TaskService } from './shared/task.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
})

export class TasksComponent implements OnInit {
  public tasks: Array<Task>;
  public newTask: Task;

  constructor(private taskService: TaskService) { 
    this.newTask = new Task(null, '');
  }

  ngOnInit() { 
    this.taskService.getTasks()
      .subscribe(
        tasks => this.tasks = tasks,
        error => alert('There may be a problem with the server. Please try again later.')
      )
  }

  createTask() {
    this.newTask.title = this.newTask.title.trim();

    if(!this.newTask.title) {
      alert("Task title can't be blank.");
    } else {
      this.taskService.createTask(this.newTask)
        .subscribe(
          (task) => {
            this.tasks.push(task);
            this.newTask = new Task(null, '');
          },
          () => alert('There may be a problem with the server. Please try again later.')
        )
    }
  }
}
