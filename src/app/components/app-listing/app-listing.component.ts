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
    this.taskService.getUserTask.subscribe((data)=> {
      this.taskListing.push(data)
    })
  }


}
