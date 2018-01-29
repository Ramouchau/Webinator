import { Injectable } from '@angular/core';
import { APIResult, APIErrors } from '../_utils/APIResult';
import { HttpClient } from '@angular/common/http';
import { serverUrl } from '../../env/api';

@Injectable()

export class RegisterService {

	public constructor(private _http: HttpClient) { /**/ }

	public register(registerInputs: APIRegisterInputs): Promise<APIResult<APIRegisterOutputs, APIErrors>> {
			return new Promise((resolve, reject) =>
				this._http.post(serverUrl + '/register', registerInputs).subscribe(
					(data: APIResult<APIRegisterOutputs, APIErrors>) => {
						resolve(data);
					},
					(error) => {
						reject(error);
					}
				));
	}
}

/** Inputs for the register service. */
export interface APIRegisterInputs {
	username: string;
	password: string;
	email: string;
}

/** Outputs for the register service. */
export interface APIRegisterOutputs {
	insertId: number;
}

export const registerErrors = {
	UNKNOWN: APIErrors.UNKNOWN,
	INVALID: APIErrors.INVALID,
	EMAIL_EXISTS: APIErrors.REGISTER_EMAIL_EXISTS
};
