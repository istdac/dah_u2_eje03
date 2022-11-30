import { Task } from './../models/task';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[];
  private tas: Task;      //Tareas pendientes
  private compTasks: Task[] = [];   //Tareas completadas
  constructor(private firestore: AngularFirestore) {
    //Tener informacion al inicio
    this.tasks = [
      {tarea:'Tarea 1'},{tarea:'Tarea 2'}
    ];
   }
   //Añadir metodos para manejar tareas
   //Recuperar tareas
   public getTasks(){
    return this.firestore.collection('tareas')
      .snapshotChanges()
      .pipe(
        map(actions=>actions.map(a=>{
            const data = a.payload.doc.data() as Task;
            const id = a.payload.doc.id;
            return {id,...data};
          }))
      );
   }
   //Recuperar tareas completas
   public getCompTasks(){
    //return this.compTasks;
    return this.firestore.collection('completas')
      .snapshotChanges()
      .pipe(
        map(actions=>actions.map(a=>{
            const data = a.payload.doc.data() as Task;
            const id = a.payload.doc.id;
            return {id,...data};
          }))
      );

   }
   //Añadir tarea
   public addTask(task: string){
    //this.tasks.push({tarea:task});
    this.firestore.collection('tareas').add({tarea:task});
   }
   //Borrar tarea
   public deleteTask(id: string){
    //this.compTasks.push(this.tasks[pos]);
    //this.tasks.splice(pos,1);
    return this.firestore.collection('tareas').doc(id).delete();
   }
   //Borra una tarea de tareas completas y la pone en tareas
   public uncompleteTask(id: string){
    //this.tasks.push(this.compTasks[pos]);
    //this.compTasks.splice(pos,1);
    //this.firestore.collection('completas').add({tarea:transfer.tarea,id:transfer.id});
    this.firestore.collection('completas').doc(id).snapshotChanges().subscribe(task=>{
      this.tas=task.payload.data() as Task;
      this.addTask(this.tas.tarea);
     });
    return this.firestore.collection('completas').doc(id).delete();
   }

   //Completa una tarea y la borra de tareas
   public completeTask(id: string){
    //this.compTasks.push(this.tasks[pos]);
     this.firestore.collection('tareas').doc(id).snapshotChanges().subscribe(task=>{
      this.tas=task.payload.data() as Task;
      this.firestore.collection('completas').add({tarea: this.tas.tarea});
     });
     this.deleteTask(id);
   }

}
