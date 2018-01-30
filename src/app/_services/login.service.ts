import { Injectable } from '@angular/core';
import { ExpressLoginInputs, ExpressLoginOutputs, APIResult, APIError } from '@etna-proj/webinator-server';
import { HttpClient } from '@angular/common/http';
import { serverUrl } from '../../env/api';

@Injectable()

export class LoginService {

	public constructor(private _http: HttpClient) { /**/ }

	public login(loginInputs: ExpressLoginInputs): Promise<APIResult<ExpressLoginOutputs, APIError>> {
		return new Promise((resolve, reject) => {
			this._http.post(serverUrl + '/login', loginInputs).subscribe(
				(data: APIResult<ExpressLoginOutputs, APIError>) => {
					resolve(data);
				},
				(error) => {
					reject(error);
				}
			);
		});
	}
}
