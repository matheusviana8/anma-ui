import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JwtModule } from '@auth0/angular-jwt';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

import { AuthGuard } from './auth.guard';
import { LogoutService } from './logout.service';
import { AuthService } from './auth.service';
import { MoneyHttp } from './money-http';
import { SegurancaRoutingModule } from './seguranca-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { environment } from '../../environments/environment';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }),
    InputTextModule,
    ButtonModule,
    ProgressSpinnerModule,

    SegurancaRoutingModule
  ],
  declarations: [LoginFormComponent],
  providers: [
    AuthGuard,
    LogoutService
  ]
})
export class SegurancaModule { }
