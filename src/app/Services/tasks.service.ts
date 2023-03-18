import { Injectable } from '@angular/core';
import {Task} from "../Models/task";
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks:Task[] =[];

  getTasks(){
    return this.tasks;
  }
  getTaskIndexbyId(id:number){
    return this.tasks.findIndex(i=> i.id===id);
  }
  addTask(task:Task){
    this.tasks.push(task);
  }
  editTask(task:Task){
    let index = this.getTaskIndexbyId(task.id);
    if(index!=-1){
      this.tasks[index]=task;
    }
  }
  deleteTask(task:Task){
    let index = this.getTaskIndexbyId(task.id);
    if(index!=-1){
      this.tasks.splice(index,1);
    }
  }

}
