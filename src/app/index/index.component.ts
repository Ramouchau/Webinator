import { Component, OnInit } from '@angular/core';
import { IndexService } from '../_services/index.service';
import { Planet } from '../_models/planet';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

	public planets: Array<Planet>;
	public constructor(private _data: IndexService) { /**/ }

	public ngOnInit() {
		this._data.getUserPlanets().then((res: Array<Planet>) => {
			this.planets = res;
		});
	}

}
