import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users = [
    {
      firstName: 'Max',
      lastName: 'Mustermann',
      birthday: '01.01.2000'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
