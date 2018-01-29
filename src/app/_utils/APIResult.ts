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

export abstract class APIResult<TContents, TError> {

	// Public attributes
	/** API success information. */
	public contents: TContents;

	/** API error informaiton. */
	public error: TError;

	// Constructor
	public constructor(contents: TContents, error: TError) {
		this.contents = contents;
		this.error = error;
	}

	// Public methods
	/** Stringifies this instance. */
	public toString() {
		return JSON.stringify({
			contents: this.contents,
			error: this.error
		});
	}
}
