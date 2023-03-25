import { Component } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../auth-styles.scss', './signup.component.scss'],
})
export class SignupComponent {
  user: User;
  submited: boolean;
  constructor() {
    this.user = new User(null, null, null);
    this.submited = false;
  }

  submit() {
    console.log('Signup form submit');
  }
}
