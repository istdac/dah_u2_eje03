import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //Crear atributo para tareas
  public tasks:string[];
  public task:string;
  //Conectarse al servicio al entrar al homepage
  //Tener que importar servicio como parametro para poder manejarlo
  //Al instanciar el taskservice se corre su constructor
  constructor(private taskService:TaskService) {
    this.tasks=this.taskService.getTasks();
    this.task="algo";
  }

  //Crear método para añadir tareas
  //Como task es publico y enlaado al input, no se requiere de parámetro
  public addTask(){
    //Hacer uso de servicio para añadir la tarea
    /*Declarar un atributo y recibir con parametro*/
    this.taskService.addTask(this.task);
    //Actualizar arreglo local
    //Usar servicio
    this.tasks=this.taskService.getTasks();
    //Comprobar
    console.log(this.tasks);
    //Borrar input
    this.task=""
    
    
  }/*Tarea: UX, que con un enter guarde la tarea
      Tarea: Que ponga el focus en el input tras agregar tarea 
      
      Borrar task*/
  public removeTask(pos:number){
    this.taskService.deleteTask(pos);
    //Actualizar arreglo
    this.tasks=this.taskService.getTasks();
  }
  /*Controlador completo, para visualizar lista se maneja en html */

}
