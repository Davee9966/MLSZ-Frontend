import { Users } from './../../app/interfaces/users';
import { UsersService } from './../../app/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: Users[] = [];
  selectedItems = [];
  showUserOnModal: Users | any;
  columns: any[] = ['id', 'name', 'email', 'phone', 'org', 'position', 'role'];
  constructor(private service: UsersService) {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.service.getAll().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }
  ngOnInit(): void {}

  checkSelected = (selectedItems: any) => {
    this.selectedItems = selectedItems.map((item: { id: any }) => item.id);
  };

  modalUser() {
    let index = this.selectedItems[0];
    this.showUserOnModal = this.users.find((u: Users) => u.id === index);
    console.log(this.showUserOnModal);
  }

  editDisabled() {
    return this.selectedItems.length <= 1;
  }
  log(m: any) {
    console.log(m);
  }
}
