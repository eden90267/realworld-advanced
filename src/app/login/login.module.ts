import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth/auth.component';
import {LoginRoutingModule} from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [AuthComponent]
})
export class LoginModule {
}
