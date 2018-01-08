import { APIErrors } from './APIErrors';

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
