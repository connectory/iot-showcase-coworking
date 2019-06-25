import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-conference-room',
  templateUrl: './conference-room.component.html',
  styleUrls: ['./conference-room.component.scss']
})
export class ConferenceRoomComponent implements OnInit {

  public conferenceRoomData = [
    {
      user: 'xyz',
      time: '2019-06-21T11:57:31Z',
      paid: 345
    },
    {
      user: 'xyz2',
      time: '2019-06-21T11:57:31Z',
      paid: 35
    },
    {
      user: 'xyz3',
      time: '2019-06-21T11:57:31Z',
      paid: 346
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
