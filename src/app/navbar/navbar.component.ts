import {AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { user } from '../_models/user';
import {
	MatSidenav
} from '@angular/material';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit{

  public user = user;
  @ViewChild('snav') snav: ElementRef;

  constructor() { }

  /*public toggleNav()
  {
	  this.snav.open();
  }*/
  ngOnInit() {
  }
  ngAfterViewInit()
  {
	console.log(this.snav);
  }
}
