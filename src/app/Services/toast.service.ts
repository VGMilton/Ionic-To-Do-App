import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastCtrl:ToastController) {}
  async showToast(message:string){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:1500,
      position:'bottom',
      icon:"remove-circle-outline",
      color:"danger"
    })
    await toast.present();
  }


}
