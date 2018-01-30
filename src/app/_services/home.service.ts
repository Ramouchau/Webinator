import { Injectable } from '@angular/core';
import { Planet } from '../_models/planet';
import { Socket } from 'ng-socket-io';
import { RSocketLoginInputs, RSocketLoginOutputs, APIError } from '@etna-proj/webinator-server';
import { loginToken } from '../../env/localStorage';

@Injectable()

export class HomeService {

	public constructor(private _socket: Socket) { /**/ }

	public connect(): boolean {
		const token = localStorage.getItem(loginToken);
		if (!token)
			return false;
		this._socket.emit('login', {token: loginToken});
		return true;
	}

	public getMessage() {
		return this._socket
				.fromEvent('login')
				.subscribe((data: RSocketLoginOutputs) => data);
	}

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
