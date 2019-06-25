import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.scss']
})
export class LightsComponent implements OnInit {

  public lights = [
    {
      room: 'Room1',
      isOn: true,
      paid: 300
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
