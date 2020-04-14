import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class ToastService {

  constructor(private toastController: ToastController) {}

  async showNotification(messageNotification: string) {
    const toast = await this.toastController.create({
      message: messageNotification,
      duration: 2000
    });
    toast.present();
  }
}
