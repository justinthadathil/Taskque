import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TaskDetails } from 'src/app/task-details';
declare var $: any;

@Component({
  selector: 'app-app-create-task',
  templateUrl: './app-create-task.component.html',
  styleUrls: ['./app-create-task.component.scss']
})
export class AppCreateTaskComponent implements OnInit {

  createTaskForm: FormGroup
  isSubmitted: Boolean = false;
  storeTask: TaskDetails

  constructor(
    public formBuilder: FormBuilder,
    private toastr: ToastrService
  ){

  }

  ngOnInit(): void {
    this.getCreateTaskForm();
  }

  submitValue(){
    if(!this.createTaskForm.valid){
      this.isSubmitted = true;
      return;
    }

    let formValue = this.createTaskForm.value;

    this.storeTask = {
      taskName: formValue.taskName,
      description: formValue.description,
      status: formValue.status
    }
    this.toastr.success(`${formValue.taskName} task created successfully`)
    this.resetForm();
    console.log(this.storeTask)
  }

  resetForm(){
    this.createTaskForm.reset();
    this.isSubmitted = false;
  }

  getCreateTaskForm(){
    this.createTaskForm = this.formBuilder.group({
      taskName: ['', [Validators.required, Validators.maxLength(25)]],
      description: ['', [Validators.maxLength(50)]],
      status:[false]
    });
  }



}
