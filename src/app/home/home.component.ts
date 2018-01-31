import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../_services/home.service';
import { Planet } from '../_models/planet';
import { user } from '../_models/user';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

	public planets: Array<Planet>;
	public user = user;

	public constructor(private _homeService: HomeService,
		private _router: Router) { /**/ }

	public ngOnInit() {
		if (!this._homeService.connect()) {
			this._router.navigate(['/login']);
			return;
		}
		this._homeService.getUserPlanets().then((res: Array<Planet>) => {
			this.planets = res;
		});
	}
}
