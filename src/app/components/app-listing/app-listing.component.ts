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
  statusFilter: boolean
  showAllList:boolean = true;

  constructor(private taskService: TaskManagementService){

  }

  ngOnInit(): void {
    //get data from create task component
    this.taskService.getUserTask.subscribe((data)=> {
      //latest task first
      this.taskListing.unshift(data)
      this.taskService.getTaskList(this.taskListing);
    });

    //get status from create filter component
    this.taskService.taskStatus.subscribe((status)=> {
      if(status === 'All'){
        this.showAllList = true;
      }else{
        this.showAllList = false;
        this.statusFilter = status === 'Completed' ? true : false
      }
    });
  }

  checkStatus(event: Event, task: TaskDetails){
    let getStatus = (<HTMLInputElement>event.target).checked
    this.taskListing.map((elm) => {
      if(elm.taskID === task.taskID){
        elm.status = getStatus
      }
    });
  }

  deleteTask(task: TaskDetails){
    let getIndex = this.taskListing.findIndex(x => x.taskID === task.taskID);
    this.taskListing.splice(getIndex, 1);
    this.taskService.getTaskList(this.taskListing);
  }

}
