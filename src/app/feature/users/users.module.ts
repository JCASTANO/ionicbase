import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersPage } from './users.page';
import { EditUserModalPage } from './modal/edit-user/edit-user-modal.page';
import { CreateUserModalPage } from './modal/create-user/create-user-modal.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: UsersPage },
      { path: 'create-user', component: CreateUserModalPage },
      { path: 'edit-user', component: EditUserModalPage }
    ])
  ],
  declarations: [UsersPage, CreateUserModalPage, EditUserModalPage]
})
export class UsersPageModule {}
