import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TaskDetails } from 'src/app/task-details';
import { TaskManagementService } from '../../service/task-management.service';

@Component({
  selector: 'app-app-create-task',
  templateUrl: './app-create-task.component.html',
  styleUrls: ['./app-create-task.component.scss']
})
export class AppCreateTaskComponent implements OnInit {

  createTaskForm: FormGroup
  isSubmitted: Boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    private toastr: ToastrService,
    private taskService: TaskManagementService
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
    let storeTask: TaskDetails
    storeTask = {
      taskName: formValue.taskName,
      description: formValue.description,
      status: formValue.status
    }
    this.taskService.userTask(storeTask)
    this.toastr.success(`${formValue.taskName} task created successfully`)
    this.resetForm();
  }

  resetForm(){
    this.createTaskForm.reset();
    this.isSubmitted = false;
    this.getCreateTaskForm();
  }

  getCreateTaskForm(){
    this.createTaskForm = this.formBuilder.group({
      taskName: ['', [Validators.required, Validators.maxLength(25)]],
      description: ['', [Validators.maxLength(50)]],
      status:[false]
    });
  }



}
