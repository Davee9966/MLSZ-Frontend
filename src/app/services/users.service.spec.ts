import { Users } from './../interfaces/users';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    });
    service = TestBed.inject(UsersService);
  });

  it("should get one user with 'getOne' method", () => {
    let spy = spyOn(service, 'getOne').and.callThrough();
    service.getOne(1005);
    expect(spy).toHaveBeenCalled();
  });
  it("should get one user with 'getAll' method", () => {
    let spy = spyOn(service, 'getAll').and.callThrough();
    service.getAll();
    expect(spy).toHaveBeenCalled();
  });
  it('should delete specified user with "delete" function', () => {
    let spy = spyOn(service, 'delete');
    service.delete(1005);
    expect(spy).toHaveBeenCalled();
  });
  it('should create a user', () => {
    let spy = spyOn(service, 'create').and.callThrough();
    service.create({} as Users);
    expect(spy).toHaveBeenCalled();
  });
});
