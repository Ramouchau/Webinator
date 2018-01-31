import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../_services/home.service';
import { planets, Planet } from '../_models/planet';
import { user, User } from '../_models/user';
import { } from '@wawolf/socket-router';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

	public planets = planets;
	public user: User = user;
	public canSelectPlanet: boolean = false;
	public planetAttack: Planet = null;
	public attackPrepare: boolean = false;
	public planetsChoose: Array<Planet> = new Array<Planet>();
	public constructor(private _homeService: HomeService,
		private _router: Router) { /**/ }

	public startGame()
	{
		this._homeService.startGame().then((res: string) =>
		{
			console.log(res);
		}).catch((err) => {
			console.log('ERR:', err);
		});
	}
	public disconnect()
	{
		this._homeService.disconnect().then((res) =>
		{
			this._router.navigate(['/login']);
		}).catch((err) => {
			console.log('ERR:', err);
		});
	}
	public ngOnInit() {
		this._homeService.connect((data) => {
			if (!data)
				this._router.navigate(['/login']);
		});
		this._homeService.getUserPlanets().then((res: Map<number, Planet>) => {/**/}).catch((err) => {
			console.log('ERR:', err);
		});
	}
	public addPlanet()
	{
		this.planetsChoose.push(null);
	}
	public getType = (name) => {
		let ttl = 0;
		for (let i = name.length - 1; i >= 0; i--)
			ttl += name[i].charCodeAt();
		ttl = Math.ceil(ttl * 12.912) % 3;
		return ['lava', 'ice', 'forest'][ttl];
	}

	public launchAttack() {
		this._homeService.getTargetablePlanets().then((res) => {
			console.log('bla');
		}).catch((err) => {
			console.log('ERR:', err);
		});
		this.canSelectPlanet = true;
	}

	public selectPlanet(pl) {
		if (!this.canSelectPlanet) {
			return;
		}
		this.planetAttack = pl;
		if (this.planetAttack != null) {
			this.attackPrepare = true;
		}
	}
}
