import { Component, OnInit } from '@angular/core';
import { TaskManagementService } from '../../service/task-management.service';

@Component({
  selector: 'app-app-filter',
  templateUrl: './app-filter.component.html',
  styleUrls: ['./app-filter.component.scss']
})
export class AppFilterComponent implements OnInit{

  filterOptions: string[] = ['All', 'Completed', 'Incomplete']
  showFilter: Boolean

  constructor(private taskService: TaskManagementService){

  }

  ngOnInit(): void {
    this.taskService.taskListing.subscribe((data) => {
      data.length === 0 ? this.showFilter = false : this.showFilter = true
    })
  }

  getCheckValue(event: Event){
    let getID = (<HTMLInputElement>event.target).id;
    this.taskService.sendTaskStatus(getID);
  }

}
