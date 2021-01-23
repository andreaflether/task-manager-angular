import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent implements OnInit, AfterViewInit {
  public task: Task;
  public taskDoneOptions: Array<any> = [
    { value: false, text: 'Pending' },
    { value: true, text: 'Done' }
  ]

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location
  ) {  }

  ngAfterViewInit() { }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.taskService.getById(+params['id']))
    .subscribe(
      task => this.task = task,
      error => alert('There may be a problem with the server. Please try again later.')
    )
  }

  goBack() {
    this.location.back();
  }

  updateTask() {
    if(!this.task.title) {
      alert("Task title can't be blank.")
    } else {
      this.taskService.update(this.task)
        .subscribe(
          () => alert('Task updated successfully.'),
          () => alert('There may be a problem with the server. Please try again later.')
        )
    }
  }

  showFieldError(field): boolean {
    return field.invalid && (field.touched || field.dirty);
  }
}