import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: string[]=[];         //Tareas pendientes
  private compTasks: string[] = [];   //Tareas completadas
  constructor() {
    //Tener informacion al inicio
    this.tasks.push('Tarea 1');
    this.tasks.push('Tarea 2');
   }
   //Añadir metodos para manejar tareas
   //Recuperar tareas
   public getTasks(): string[]{
    return this.tasks;
   }
   //Recuperar tareas completas
   public getCompTasks(): string[]{
    return this.compTasks;
   }
   //Añadir tarea
   public addTask(task: string){
    this.tasks.push(task);
   }
   //Borrar tarea
   public deleteTask(pos: number){
    //this.compTasks.push(this.tasks[pos]);
    this.tasks.splice(pos,1);
   }
   //Borra una tarea de tareas completas y la pone en tareas
   public uncompleteTask(pos: number){
    this.tasks.push(this.compTasks[pos]);
    this.compTasks.splice(pos,1);
   }

   //Completa una tarea y la borra de tareas
   public completeTask(pos: number){
    this.compTasks.push(this.tasks[pos]);
    this.deleteTask(pos);
   }

}
