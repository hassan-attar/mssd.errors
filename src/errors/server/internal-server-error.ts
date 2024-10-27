import { BaseServiceError, ServiceError } from "../abstract/service-error";

/**
 * Represents a generic server error, by default a 500 Internal Server Error.
 *
 * This class extends the abstract `ServiceError` class and is used to handle
 * generic internal server-side errors. It can also be extended to define
 * more specific server-side error classes (e.g. Server is down for maintenance).
 *
 * The `InternalServerError` class provides a default implementation for the `serializeErrors`
 * method, which returns a generic internal server error response.
 *
 * @class InternalServerError
 * @extends {ServiceError}
 */
class InternalServerError extends ServiceError {
    /**
     * The HTTP status code for the error. In this case, 500 represents
     * an internal server error.
     *
     * @type {number}
     * @default 500
     */
    code = 500;

    /**
     * The actual error object that caused the server failure.
     * This can be useful for logging or debugging purposes on the server.
     *
     * @private
     * @type {Error}
     */
    private error: Error;

    /**
     * Creates an instance of `InternalServerError`.
     *
     * @constructor
     * @param {string} logMessage - A message intended for server-side logging, which helps identify the issue internally.
     * @param {Error} error - The underlying error object that triggered this server error.
     */
    constructor(logMessage: string, error: Error) {
        super(logMessage);
        Object.setPrototypeOf(this, InternalServerError.prototype); // Set prototype explicitly for inheritance in TypeScript
        this.error = error;
    }

    /**
     * Serializes the error details into an array of `BaseServiceError` objects.
     *
     * This method is responsible for transforming the error into a user-friendly format
     * that can be returned to the client or used in API responses. The default
     * implementation returns a generic 500 error response.
     *
     * @returns {BaseServiceError[]} An array containing a single `BaseServiceError` object with:
     * - `code`: The HTTP status code (500).
     * - `type`: The error type ("InternalServerError").
     * - `message`: A user-friendly message indicating that something went wrong internally.
     */
    serializeErrors(): BaseServiceError[] {
        return [
            {
                code: this.code,
                type: "InternalServerError",
                message: "Oops! Something went wrong on our end. Please try again later."
            }
        ];
    }
}

export { InternalServerError };
