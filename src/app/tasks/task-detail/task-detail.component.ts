import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';

import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent implements OnInit, AfterViewInit {
  public reactiveTaskForm: FormGroup;
  public task: Task;
  public taskDoneOptions: Array<any> = [
    { value: false, text: 'Pending' },
    { value: true, text: 'Done' }
  ]

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location
  ) { 
    this.reactiveTaskForm = new FormGroup({
      title: new FormControl(null),
      deadline: new FormControl(null),
      done: new FormControl(null),
      description: new FormControl(null),
    })
  }

  ngAfterViewInit() {
    $('#deadline').daterangepicker({
      singleDatePicker: true,
      timePicker: true,
      autoApply: true,
      autoUpdateInput: true,
      locale: {
        format: 'MMMM D, YYYY hh:mm'
      }
    }).on('apply.daterangepicker', () => this.reactiveTaskForm.get('deadline').setValue($('#deadline').val()));
  }

  ngOnInit() {
    this.task = new Task(null, null);

    this.route.params
    .switchMap((params: Params) => this.taskService.getById(+params['id']))
    .subscribe(
      task => this.setTask(task),
      error => alert('There may be a problem with the server. Please try again later.')
    )
  }

  setTask(task: Task): void {
    this.task = task;
    
    let formModel = {
      title: task.title || null,
      deadline: task.deadline || null,
      done: task.done || false,
      description: task.description || null,
    };
    this.reactiveTaskForm.patchValue(formModel);
  }

  goBack() {
    this.location.back();
  }

  updateTask() {
    this.taskService.update(this.task)
      .subscribe(
        () => alert('Task updated successfully.'),
        () => alert('There may be a problem with the server. Please try again later.')
      )
  }

  showFieldError(field): boolean {
    return field.invalid && (field.touched || field.dirty);
  }
}