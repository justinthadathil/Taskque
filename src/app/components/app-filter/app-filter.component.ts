import { Component, OnInit } from '@angular/core';
import { TaskManagementService } from '../../service/task-management.service';
import { TaskDetails } from 'src/app/task-details';

@Component({
  selector: 'app-app-filter',
  templateUrl: './app-filter.component.html',
  styleUrls: ['./app-filter.component.scss']
})
export class AppFilterComponent implements OnInit{

  filterOptions: string[];
  showFilter: Boolean

  constructor(private taskService: TaskManagementService){

  }

  ngOnInit(): void {
    this.taskService.taskListing.subscribe((data) => {
      data.length === 0 ? this.showFilter = false : this.showFilter = true;
      this.showCount(data)
    })
  }

  showCount(data: TaskDetails[]){
    let all = data.length;
    let comp = data.filter((task) => task.status).length;
    let unComp = data.filter((task) => !task.status).length;
    let newFilterCount = [`All (${all})`, `Completed (${comp})`, `Incomplete (${unComp})`]
    this.filterOptions = newFilterCount;
  }

  getCheckValue(event: Event){
    let getID = (<HTMLInputElement>event.target).id;
    let sendID = getID.includes('All') ? 'All' : (getID.includes('Completed') ? 'Completed' : 'Incomplete');
    this.taskService.sendTaskStatus(sendID);
  }

}
