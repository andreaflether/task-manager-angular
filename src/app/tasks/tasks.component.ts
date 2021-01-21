import { Component, OnInit } from '@angular/core';

import { Task } from './shared/task.model';
import { TaskService } from './shared/task.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
})

export class TasksComponent implements OnInit {
  public tasks: Array<Task>;
  public selectedTask: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit() { 
    this.taskService.getTasks()
      .subscribe(
        tasks => this.tasks = tasks,
        error => alert('There may be a problem with the server. Please try again later.')
      )
  }

  onSelect(task: Task) {
    this.selectedTask = task;
  }
}
