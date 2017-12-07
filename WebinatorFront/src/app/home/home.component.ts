import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user: User = {
	mail: 'ssad',
	password: 's',
	username: 'w'
  }
}
