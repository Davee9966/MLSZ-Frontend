import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  isLoggedIn = false;
  redirectUrl: string | undefined;

  login(email: any, pass: any): Promise<any> {
    const url = 'https://localhost:7010/api/Auth/login';

    return new Promise((resolve, reject) => {
      this.http
        .post(url, {
          email: email,
          password: pass,
        })
        .subscribe({
          error: (e) => reject(e),
          next: (n) => resolve(n),
        });
    });
  }
}
