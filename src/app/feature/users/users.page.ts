import { Component } from '@angular/core';
import { User } from './model/user';
import { ModalController } from '@ionic/angular';
import { CreateUserModalPage } from './modal/create-user/create-user-modal.page';
import { UserService } from './service/user.service';
import { EditUserModalPage } from './modal/edit-user/edit-user-modal.page';

@Component({
  selector: 'app-users',
  templateUrl: 'users.page.html',
  styleUrls: ['users.page.scss']
})
export class UsersPage {

  users: User[] = [];

  constructor(private userService: UserService,
              private modalController: ModalController) {}

  ionViewDidEnter() {
    this.userService.list().subscribe (users => {
      this.users = users;
    });
  }

  async create() {

    const modal = await this.modalController.create({
      component: CreateUserModalPage
    });

    return await modal.present();
  }

  async edit(user: User) {

    const modal = await this.modalController.create({
      component: EditUserModalPage,
      componentProps: {
        userForEdit: user
      }
    });

    modal.onDidDismiss().then(response => {

      this.users.filter(userFiltered => userFiltered.id === response.data.id)
                .forEach(userFiltered => {
        userFiltered.email = response.data.email;
        userFiltered.avatar = response.data.avatar;
      });

    });

    return await modal.present();
  }

  trackByFn(index: number) {
    return index;
  }
}
