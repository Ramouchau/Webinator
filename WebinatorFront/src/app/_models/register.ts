import { APIErrors } from './APIErrors';

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
