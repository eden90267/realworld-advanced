import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginData = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  doLogin() {
    // login code
    this.router.navigate(['/'], {
      queryParams: {
        foo: 'bar'
      }
    });
  }

}
