import { Injectable } from '@angular/core';
import { TaskDetails } from '../task-details';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {

  getUserTask = new Subject<TaskDetails>()
  taskStatus = new Subject<string>()
  taskListing = new Subject<TaskDetails[]>()

  constructor() { }

  userTask(data: TaskDetails){
    this.getUserTask.next(data)
  }

  sendTaskStatus(status: string){
    this.taskStatus.next(status)
  }

  getTaskList(listing: TaskDetails[]){
    this.taskListing.next(listing)
  }
}
