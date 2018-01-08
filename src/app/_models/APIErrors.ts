export const enum APIErrors {
	/** Unhandled error. */
	UNKNOWN,
	/** Input data was not succesfully validated before treatment. */
	INVALID,
	/** Login service: email not found. */
	LOGIN_WRONG_EMAIL,
	/** Login service: password doesn't match the hash. */
	LOGIN_WRONG_PASSWORD,
	/** Register service: email already exists. */
	REGISTER_EMAIL_EXISTS
}
