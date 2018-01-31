import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import {
	RSocketLoginInputs,
	RSocketLoginOutputs,
	RSocketListUserPlanetsInputs,
	RSocketListUserPlanetsOutputs,
	RSocketAttackPlanetInputs,
	RSocketAttackPlanetOutputs,
	RSocketStartGameInputs,
	RSocketStartGameOutputs,
	RSocketListTargetablePlanetsInputs,
	RSocketListTargetablePlanetsOutputs,
	APIError,
	APISuccess
} from '@etna-proj/webinator-server';
import { loginToken } from '../../env/localStorage';
import { user } from '../_models/user';
import { planets } from '../_models/planet';
import { Router } from '@wawolf/socket-router-client';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()

export class HomeService {

	private _rsoket = new Router(this._socket as any as SocketIOClient.Socket);

	public constructor(private _socket: Socket) {/**/ }

	public connect(cb: (data: RSocketLoginOutputs | null) => void) {
		const token = localStorage.getItem(loginToken);
		if (!token)
			return cb(null);
		this._rsoket.get<RSocketLoginInputs, APIError | APISuccess<RSocketLoginOutputs>>('login', { token: token }, (err, data) => {
			if (err || data.error)
				return cb(null);
			else if (data) {
				user.id = data.contents.user.id;
				user.email = data.contents.user.email;
				user.score = data.contents.user.score;
				user.username = data.contents.user.username;
				user.actionPointsCount = data.contents.user.actionPointsCount;
				return cb(data.contents);
			}
		});
	}

	public disconnect() {
		return new Promise((resolve, reject) => {
			this._socket.disconnect();
			localStorage.removeItem(loginToken);
			resolve(true);
		});
	}

	public getUserPlanets() {
		return new Promise((resolve, reject) => {
			this._rsoket.get<RSocketListUserPlanetsInputs, APIError | APISuccess<RSocketListUserPlanetsOutputs>>('list-user-planets', {}, (err, data) => {
				if (err)
					return reject(err);
				else if (data.error)
					return reject(data.error);
				else {
					for (const planet of data.contents.planets)
						planets.push({
							id: planet.id,
							age: planet.age,
							event: planet.event,
							lastUpdateTime: planet.lastUpdateTime,
							name: planet.name,
							shipsCount: planet.shipsCount,
							owner: { id: planet.owner.id, username: planet.owner.username }
						});
					user.planets = planets;
					user.ships = 0;
					user.planets.forEach((value) => {
						user.ships += value.shipsCount;
					});
					return resolve(planets);
				}
			});
		});
	}

	public startGame() {
		return new Promise((resolve, reject) => {
			this._rsoket.get<RSocketStartGameInputs, APIError | APISuccess<RSocketStartGameOutputs>>('start-game', {}, (err, data) => {
				if (err)
					return reject(err);
				else if (data.error)
					return reject(data.error);
				else
					return resolve(true);
			});
		});
	}

	public getTargetablePlanets() {
		return new Promise((resolve, reject) => {
			// tslint:disable-next-line:max-line-length
			this._rsoket.get<RSocketListTargetablePlanetsInputs, APIError | APISuccess<RSocketListTargetablePlanetsOutputs>>('list-targetable-planets', {}, (err, data) => {
				if (err)
					return reject(err);
				else if (data.error)
					return reject(data.error);
				else {
					for (const planet of data.contents.planets)
						planets.push({
							id: planet.id,
							age: planet.age,
							event: planet.event,
							lastUpdateTime: planet.lastUpdateTime,
							name: planet.name,
							shipsCount: planet.shipsCount,
							owner: { id: planet.owner.id, username: planet.owner.username }
						});
					return resolve(true);
				}
			});
		});
	}

	public attackPlanet(target, troops) {
		/* */
	}
}
