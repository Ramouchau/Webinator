import { Component, OnInit } from '@angular/core';
import { user } from '../_models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user = user;

  constructor() { }

  ngOnInit() {
  }

}
