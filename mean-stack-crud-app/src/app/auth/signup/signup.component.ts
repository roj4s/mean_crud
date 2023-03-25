import { Component } from '@angular/core';
import { User } from '../model/user';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../auth-styles.scss', './signup.component.scss'],
})
export class SignupComponent {
  user: User;
  submited: boolean;
  constructor(public apiService: ApiService, public route: Router) {
    this.user = new User(null, null, null);
    this.submited = false;
  }

  submit() {
    this.apiService.signup(this.user).subscribe(
      (resp) => {
        console.log(resp);
        this.route.navigate(['/']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
