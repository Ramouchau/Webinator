import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Planet } from '../planet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  planets: Planet[] = [
      { id: 1, ships: 16, event: 0 },
      { id: 2, ships: 72, event: 0 }
  ];

  defaultUser: User = new User();

  padding: { left: number, right: number, top: number, bottom: number }
    = { left: 220, right: 220, top: 100, bottom: 0}

  constructor() {

  }

  ngOnInit() {
    this.defaultUser.planets = this.planets;
  }

}
