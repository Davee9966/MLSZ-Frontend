import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let client;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });
    client = TestBed.inject(HttpClientTestingModule);
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('login should recieve error if credentials are incorrect', () => {
    let loginSpy = spyOn(service, 'login').and.callThrough();
    expectAsync(service.login('', '')).toBeRejectedWithError();
    expect(loginSpy).toHaveBeenCalled();
  });
});
