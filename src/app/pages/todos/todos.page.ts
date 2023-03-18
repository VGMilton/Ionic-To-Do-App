import { ToastService } from './../../Services/toast.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TasksService } from "../../Services/Tasks/tasks.service";
import { Task } from "../../Models/task";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {
  private Stask:TasksService;
  private Stoast: ToastService;
  constructor(private alertCtrl:AlertController,Stask:TasksService,Stoast:ToastService) {
    this.Stask = Stask;
    this.Stoast=Stoast;
  }

  ngOnInit() {
  }
  async presentAlert(){
    const alert= await this.alertCtrl.create({
      header:'Nueva Tarea',
      inputs:[
        {
          name:'task',
          placeholder:'Introduce tu tarea',
          type:'text'
        }
      ],  
      buttons:[
        {
          text:'Cancelar',
          role:'cancelar',
        },
        {
          text:'Ingresar',
          role:'ingresar',
          handler:(data:any)=>{
            let titulo = data.task;
            let id = this.Stask.getTasks().length;
            let estado = false;
            let newTask:Task;
            try {
              newTask= this.Stask.createTask(id,titulo,estado);
              this.Stask.addTask(newTask);
            } catch (error:any) {
              this.Stoast.showToast(error.message);
            }
          }
        }
      ]    
    })
    await alert.present();
  }

}

