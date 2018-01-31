import { Injectable } from '@angular/core';
import { Planet } from '../_models/planet';
import { Socket } from 'ng-socket-io';
import {
	RSocketLoginInputs,
	RSocketLoginOutputs,
	RSocketListUserPlanetsInputs,
	RSocketListUserPlanetsOutputs,
	APIError,
	APISuccess
} from '@etna-proj/webinator-server';
import { loginToken } from '../../env/localStorage';
import { user } from '../_models/user';
import { Router } from '@wawolf/socket-router-client';

@Injectable()

export class HomeService {

	private _rsoket = new Router(this._socket as any as SocketIOClient.Socket);

	public constructor(private _socket: Socket) {/**/ }

	public connect(cb: (data: RSocketLoginOutputs | null) => void) {
		const token = localStorage.getItem(loginToken);
		if (!token)
			return cb(null);
		this._rsoket.get<RSocketLoginInputs, APIError | APISuccess<RSocketLoginOutputs>>('login', { token: token }, (err, data) => {
			if (err)
				return cb(null);
			else if (data) {
				user.id = data.contents.user.id;
				user.email = data.contents.user.email;
				user.score = data.contents.user.score;
				user.username = data.contents.user.username;
				user.planets = data.contents.user.planets;
				return cb(data.contents);
			}
		});
	}

	public getUserPlanets() {
		return new Promise((resolve, reject) => {
			const token = localStorage.getItem(loginToken);
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
}
