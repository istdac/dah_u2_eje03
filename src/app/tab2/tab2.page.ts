import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public comptasks: string[];
  public task: string;
  constructor(private taskService: TaskService) {
    this.comptasks=this.taskService.getCompTasks();
    console.log(this.comptasks);
  }

  public unremoveTask(pos: number){
    this.taskService.uncompleteTask(pos);
    this.comptasks=this.taskService.getCompTasks();
  }
}
