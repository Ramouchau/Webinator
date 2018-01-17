import { Injectable } from '@angular/core';
import { APIErrors } from '../_utils/APIResult';
import { Planet } from '../_models/planet';

@Injectable()

export class IndexService {

	public constructor() { /**/ }

	public getUserPlanets() {
		return new Promise((resolve, reject) => {
			const planets: Array<Planet> = [
				{id: 0, age: 1, event: 'meteorit', lastUpdateTime: new Date(), name: 'DOM TOMIE', owner: null, shipsCount: 3},
				{id: 0, age: 1, event: 'meteorit', lastUpdateTime: new Date(), name: 'MARIOOO', owner: null, shipsCount: 3},
				{id: 0, age: 1, event: 'meteorit', lastUpdateTime: new Date(), name: 'SPAGETHHH', owner: null, shipsCount: 3},
				{id: 0, age: 1, event: 'meteorit', lastUpdateTime: new Date(), name: 'El HERMANOM DE JYREN', owner: null, shipsCount: 3}
			];
			resolve(planets);
		});
	}
}
