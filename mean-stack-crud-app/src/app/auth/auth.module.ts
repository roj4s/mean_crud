import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [BrowserModule, CommonModule, FormsModule],
})
export class AuthModule {}
