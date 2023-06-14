import { EventEmitter, Injectable } from '@angular/core';
import { TaskDetails } from '../task-details';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {

  getUserTask = new Subject<TaskDetails>()

  constructor() { }

  userTask(data: TaskDetails){
    this.getUserTask.next(data)
  }
}
