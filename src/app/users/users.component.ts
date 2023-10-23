import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../data.models';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users$!: Observable<User[]>;
  usersPromise: Promise<User[]>;
  filterText = '';

  constructor(private userService: DataService) {
    this.users$ = this.userService.getUsersObservable();
    this.usersPromise = this.userService.getUsersPromise();
  }

  nameFilter() {
    this.users$ = this.userService
      .getUsersObservable()
      .pipe(
        map((users) =>
          users.filter((user) =>
            user.nombre.toUpperCase().includes(this.filterText.toUpperCase())
          )
        )
      );
  }
}
