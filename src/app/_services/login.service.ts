import { Injectable } from '@angular/core';
import { APIResult, APIErrors} from '../_utils/APIResult';
import { HttpClient } from '@angular/common/http';
import { serverUrl } from '../../env/api';
import { error } from 'util';

@Injectable()

export class LoginService {

	public constructor(private _http: HttpClient) { /**/ }

	public login(loginInputs: APILoginInputs): Promise<APIResult<APILoginOutputs, APIErrors>> {
		return new Promise((resolve, reject) => {
			this._http.post(serverUrl + '/login', loginInputs).subscribe(
				(data: APIResult<APILoginOutputs, APIErrors>) => {
					resolve(data);
				},
				(error) => {
					reject(error);
				}
			);
		});
	}
}

/** Inputs for the login service. */
export interface APILoginInputs {
	email: string;
	password: string;
}

/** Outputs for the login service. */
export interface APILoginOutputs {
	id: number;
	username: string;
	email: string;
}

export const loginErrors = {
	INVALID: APIErrors.INVALID,
	UNKNOWN: APIErrors.UNKNOWN,
	WRONG_EMAIL: APIErrors.LOGIN_WRONG_EMAIL,
	WRONG_PASSWORD: APIErrors.LOGIN_WRONG_PASSWORD
};
