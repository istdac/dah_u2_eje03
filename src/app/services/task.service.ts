import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: string[]=[];
  constructor() {
    //Tener informacion al inicio
    this.tasks.push('Tarea 1');
    this.tasks.push('Tarea 2');
   }
   //Añadir metodos para manejar tareas
   public getTasks(): string[]{
    return this.tasks;
   }
   public addTask(task: string){
    this.tasks.push(task);
   }
   public deleteTask(pos: number){
    this.tasks.splice(pos,1);
   }

}
