import { Injectable } from '@angular/core';
import { Planet } from '../_models/planet';
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
	APIError,
	APISuccess
} from '@etna-proj/webinator-server';
import { loginToken } from '../../env/localStorage';
import { user } from '../_models/user';
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

	public getUserPlanets() {
		return new Promise((resolve, reject) => {
			this._rsoket.get<RSocketListUserPlanetsInputs, APIError | APISuccess<RSocketListUserPlanetsOutputs>>('list-user-planets', {}, (err, data) => {
				if (err)
					return reject(err);
				else if (data.error)
					return reject(data.error);
				else
					return resolve(data.contents.planets);
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

	public attackPlanet(target, troops) {
		/* */
	}
}
