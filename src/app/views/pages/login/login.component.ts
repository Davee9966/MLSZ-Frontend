import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, Input } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  //authService: AuthService;
  uname: string | undefined;
  pass: string | undefined;
  alertVisible: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService = authService;
  }

  async login(x: any, pass: any): Promise<void> {
    //console.log(x, pass);
    await this.authService
      .login(x, pass)
      .then((resp: HttpResponse<any>) => {
        localStorage.setItem('token', resp.body);
        this.authService.isLoggedIn = true;
        this.alertVisible = false;
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        //console.error(err);
        this.alertVisible = true;
      });
    //console.log(localStorage.getItem('token'));
    await new Promise((resolve) => setTimeout(resolve, 15));
  }
}
