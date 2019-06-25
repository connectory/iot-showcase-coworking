import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss']
})
export class ParkingComponent implements OnInit {

  public parkingData = [
    {
      user: 'xyz',
      time: '',
      isCharging: true,
      paid: 300
    },
    {
      user: 'xyz',
      time: '',
      isCharging: false,
      paid: 300
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
