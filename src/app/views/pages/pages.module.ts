import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import {
  AlertModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
} from '@coreui/angular-pro';
import { IconModule } from '@coreui/icons-angular';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    ForgotPassComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    AlertModule,
  ],
})
export class PagesModule {}
