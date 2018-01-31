import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../_services/home.service';
import { Planet } from '../_models/planet';
import { user, User } from '../_models/user';
import {} from '@wawolf/socket-router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

	public user = user;

	public constructor(private _homeService: HomeService,
		private _router: Router) { /**/ }

	public ngOnInit() {
		this._homeService.connect((data) => {
			if (!data) {
				this._router.navigate(['/login']);
				return;
			}
			this.user = data.user;
			console.log(user);
		});
		this._homeService.getUserPlanets().then((res: Array<Planet>) => {
			this.user.planets = res;
			console.log(user.planets);
		});
	}
}
