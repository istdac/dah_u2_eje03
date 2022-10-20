import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public tasks: string[];
  public task: string;
  constructor(private taskService: TaskService) {
    this.tasks=this.taskService.getTasks();
    this.task='algo';
  }

  public addTask(){
    this.taskService.addTask(this.task);
    this.tasks=this.taskService.getTasks();
    console.log(this.tasks);
    this.task='';

  }
  public removeTask(pos: number){
    this.taskService.deleteTask(pos);
    console.log(this.taskService.getCompTasks());
    this.tasks=this.taskService.getTasks();
  }

}
