import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from '../api.service';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [BrowserModule, CommonModule, FormsModule],
  providers: [ApiService],
})
export class AuthModule {}
