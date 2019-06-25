import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenceRoomComponent } from './conference-room/conference-room.component';
import { UsersComponent } from './users/users.component';
import { ParkingComponent } from './parking/parking.component';
import { LightsComponent } from './lights/lights.component';

@NgModule({
  declarations: [ConferenceRoomComponent, UsersComponent, ParkingComponent, LightsComponent],
  exports: [
    ConferenceRoomComponent,
    UsersComponent,
    ParkingComponent,
    LightsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
