import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RegistrationComponent } from './registration.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [RegistrationComponent],
  exports: [RegistrationComponent],
})
export class LoginModule { }
