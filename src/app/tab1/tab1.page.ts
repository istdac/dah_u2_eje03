import { Task } from './../models/task';
import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public tasks: Task[];
  public task: string;
  constructor(private taskService: TaskService) {
    //this.tasks=this.taskService.getTasks();
    this.taskService.getTasks().subscribe(res=>{
      this.tasks=res;
    });
    this.task='algo';
  }

  public addTask(){
    this.taskService.addTask(this.task);
    console.log(this.tasks);
    this.task='';

  }
  public removeTask(id: string){
    this.taskService.deleteTask(id);
    //console.log(this.taskService.getCompTasks());
  }
  public completeTask(id: string){
    this.taskService.completeTask(id);
    //console.log(this.taskService.getCompTasks());
  }

}
