import { ClientError } from "../abstract";
import { BaseServiceError } from "../abstract/service-error";

/**
 * Represents an unauthorized access error, typically indicating that the user 
 * is not authenticated and needs to log in to access the requested resource.
 * 
 * This class extends the `ClientError` class and is used to handle HTTP 
 * 401 Unauthorized errors.
 * 
 * @class UnauthorizedError
 * @extends {ClientError}
 */
class UnauthorizedError extends ClientError {
    /**
     * The HTTP status code representing unauthorized access.
     * @type {number}
     */
    code = 401;

    /**
     * Serializes the error details into an array of `BaseServiceError` objects.
     * 
     * This method returns the error details specific to unauthorized access,
     * including the status code, type of error, and a user-friendly message.
     * 
     * @returns {BaseServiceError[]} An array of serialized error details, which includes:
     * - `code`: 401 (Unauthorized)
     * - `type`: "UnauthorizedError" (the name of the error class)
     * - `message`: A user-friendly message indicating that the user is not authenticated.
     */
    serializeErrors(): BaseServiceError[] {
        return [{
            code: this.code,
            type: UnauthorizedError.name,
            message: "Oops! It seems you're not logged in. Please log in to continue."
        }];
    }

    /**
     * Creates an instance of `UnauthorizedError`.
     * 
     * This constructor initializes the error with a log message for internal logging.
     */
    constructor() {
        super(UnauthorizedError.name);
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}

export { UnauthorizedError };
