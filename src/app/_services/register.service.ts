import { Injectable } from '@angular/core';
import { ExpressRegisterInputs, ExpressRegisterOutputs, APIResult, APIError } from '@etna-proj/webinator-server';
import { HttpClient } from '@angular/common/http';
import { serverUrl } from '../../env/api';

@Injectable()

export class RegisterService {

	public constructor(private _http: HttpClient) { /**/ }

	public register(registerInputs: ExpressRegisterInputs): Promise<APIResult<ExpressRegisterOutputs, APIError>> {
		return new Promise((resolve, reject) =>
			this._http.post(serverUrl + '/register', registerInputs).subscribe(
				(data: APIResult<ExpressRegisterOutputs, APIError>) => {
					resolve(data);
				},
				(error) => {
					reject(error);
				}
			));
	}
}
