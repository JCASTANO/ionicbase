import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { User } from '../../model/user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { UserMessage } from 'src/app/shared/message/user-message';
import { ToastService } from 'src/app/core/toast/toast.service';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.page.html'
})
export class EditUserModalPage {

  user: User;

  editForm: FormGroup;
  errorMessage = '';

  validationMessages = {
    email: [
      { type: 'required', message: UserMessage.EMAIL_REQUERIDO },
      { type: 'pattern', message: UserMessage.EMAIL_NO_VALIDO }],
    avatar: [
      { type: 'required', message: 'El avatar es requerido' },
      { type: 'minlength', message: 'Minimo 10 letras para el avatar'}
    ]
  };

  constructor(private navParams: NavParams,
              private formBuilder: FormBuilder,
              private userService: UserService,
              private toastService: ToastService,
              private modalController: ModalController) {
    this.initForm();
  }

  initForm() {

    this.user = this.navParams.data.userForEdit;

    this.editForm = this.formBuilder.group({
      email: new FormControl(
        this.user.email,
        Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])
      ),
      avatar: new FormControl(this.user.avatar, Validators.compose([Validators.required, Validators.minLength(10)]))
    });
  }

  async close() {
    await this.modalController.dismiss();
  }

  async edit(userForEdit: User) {
    userForEdit.id = this.user.id;
    this.userService.edit(userForEdit).subscribe(response => {
      response.id = userForEdit.id;
      this.toastService.showNotification('User have been edited.');
      this.modalController.dismiss(response);
    });
  }
}
