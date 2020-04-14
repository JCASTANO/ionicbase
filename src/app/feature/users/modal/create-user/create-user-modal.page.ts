import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-user-modal',
  templateUrl: './create-user-modal.page.html'
})
export class CreateUserModalPage {

  constructor(private modalController: ModalController) {}

  async close() {
    await this.modalController.dismiss();
  }
}
