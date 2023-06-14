import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TaskManagementService } from '../../service/task-management.service';
import { TaskDetails } from 'src/app/task-details';

@Component({
  selector: 'app-app-filter',
  templateUrl: './app-filter.component.html',
  styleUrls: ['./app-filter.component.scss']
})
export class AppFilterComponent implements OnInit{

  filterOptions: {value: string, check: Boolean}[];
  showFilter: Boolean

  sendID: string = 'All'

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

    let newFilterCount = [{
      value: `All (${all})`,
      check: this.sendID === 'All' ? true : false
    },{
      value: `Completed (${comp})`,
      check: this.sendID === 'Completed' ? true : false
    },{
      value: `Incomplete (${unComp})`,
      check: this.sendID === 'Incomplete' ? true : false
    }]
    this.filterOptions = newFilterCount;
  }

  getCheckValue(event: Event){
    let getID = (<HTMLInputElement>event.target).id;
    this.sendID = getID.includes('All') ? 'All' : (getID.includes('Completed') ? 'Completed' : 'Incomplete');
    this.taskService.sendTaskStatus(this.sendID);
  }

}
