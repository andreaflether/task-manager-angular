import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { FormUtils } from '../../shared/form.utils';
import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent implements OnInit, AfterViewInit {
  public form: FormGroup;
  public task: Task;
  public taskDoneOptions: Array<any>;
  public formUtils: FormUtils;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder
  ) { 
    this.taskDoneOptions = [
      { value: false, text: 'Pending' },
      { value: true, text: 'Done' }
    ];

    this.form = this.formBuilder.group({
      title: [null, [ Validators.required, Validators.minLength(2), Validators.maxLength(255) ]],
      deadline: [null, Validators.required],
      done: [null, Validators.required],
      description: [null],
    })
    
    this.formUtils = new FormUtils(this.form);
  }

  ngAfterViewInit() {
    $('#deadline').daterangepicker({
      singleDatePicker: true,
      timePicker: true,
      autoApply: false,
      autoUpdateInput: true,
      locale: {
        format: 'MMMM D, YYYY hh:mm'
      }
    }).on('apply.daterangepicker', () => this.form.get('deadline').setValue($('#deadline').val()));
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
    this.form.patchValue(task);
  }

  goBack() {
    this.location.back();
  }

  updateTask() {
    this.task.title = this.form.get('title').value;
    this.task.deadline = this.form.get('deadline').value;
    this.task.done = this.form.get('done').value;
    this.task.description = this.form.get('description').value;

    this.taskService.update(this.task)
      .subscribe(
        () => alert('Task updated successfully.'),
        () => alert('There may be a problem with the server. Please try again later.')
      )
  }
}