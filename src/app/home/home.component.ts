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

	public planets: Array<Planet>;
	public user: User = user;

	public constructor(private _homeService: HomeService,
		private _router: Router) { /**/ }

	public ngOnInit() {
		this._homeService.connect((data) => {
			if (!data)
				this._router.navigate(['/login']);
		});
		this._homeService.getUserPlanets().then((res: Array<Planet>) => {
			console.log(res);
			this.user.planets = res;
			this.user.ships = 0;
			for (let i = this.user.planets.length - 1; i >= 0; i--)
				this.user.ships += this.user.planets[i].shipsCount;
		}).catch((err) => {
			console.log('ERR:', err);
		});
	}

	public getType = (name) => {
		let ttl = 0;
		for (let i = name.length - 1; i >= 0; i--)
			ttl += name[i].charCodeAt();
		ttl = Math.ceil(ttl * 12.912) % 3;
		return ['lava', 'ice', 'forest'][ttl];
	}

	public launchAttack() {
		console.log('ATTACKKK');
	}
}
