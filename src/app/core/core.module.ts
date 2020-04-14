import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ErrorHandlerService } from './error/error.handler.service';
import { ToastService } from './toast/toast.service';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  providers : [
    ToastService,
    { provide: ErrorHandler, useClass: ErrorHandlerService }
  ]
})
export class CoreModule {}
