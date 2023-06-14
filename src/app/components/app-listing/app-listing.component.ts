import { Component, Input, OnInit } from '@angular/core';
import { TaskManagementService } from '../../service/task-management.service';
import { TaskDetails } from 'src/app/task-details';

@Component({
  selector: 'app-app-listing',
  templateUrl: './app-listing.component.html',
  styleUrls: ['./app-listing.component.scss']
})
export class AppListingComponent implements OnInit {

  taskListing: TaskDetails[] = [];

  constructor(private taskService: TaskManagementService){

  }

  ngOnInit(): void {
    this.taskListing.push({
      taskID: 'Justin',
      taskName: 'Build Joel',
      description: 'nexcc',
      status: false
    },
    {
      taskID: 'Joel',
      taskName: 'Build Justin',
      description: 'nexcc',
      status: false
    },
    {
      taskID: 'Gloria',
      taskName: 'Build Gloria',
      description: 'nexcc',
      status: false
    })
    this.taskService.getUserTask.subscribe((data)=> {
      this.taskListing.push(data)
      console.log(this.taskListing)
    });
  }

  checkStatus(event: Event, task: TaskDetails){
    let getStatus = (<HTMLInputElement>event.target).checked
    this.taskListing.map((elm) => {
      if(elm.taskID === task.taskID){
        elm.status = getStatus
      }
    })
  }

  deleteTask(task: TaskDetails){
    let getIndex = this.taskListing.findIndex(x => x.taskID === task.taskID);
    this.taskListing.splice(getIndex, 1);
  }


}
