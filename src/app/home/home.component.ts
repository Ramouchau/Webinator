import { Component, OnInit } from '@angular/core';
import { HomeService } from '../_services/home.service';
import { Planet } from '../_models/planet';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public planets: Array<Planet>;

	public constructor(private _data: HomeService) { /**/ }

	public ngOnInit() {
		this._data.getUserPlanets().then((res: Array<Planet>) => {
			this.planets = res;
		});
	}
}
