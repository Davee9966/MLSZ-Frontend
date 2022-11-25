import { environment, ApiPaths } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Users } from './../interfaces/users';
import { Injectable } from '@angular/core';
import { AbstractDataService } from './abstract.data.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends AbstractDataService<Users> {
  constructor(private http: HttpClient) {
    super(http, environment.apiBaseUrl, ApiPaths.User);
  }
}
