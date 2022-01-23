import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/api/users.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private usersService: UsersService) {}
  users$: Observable<User[]> = this.getUsers();

  ngOnInit(): void {}

  getUsers(): Observable<User[]> {
    return this.usersService.getUsers();
  }
}
