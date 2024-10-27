import { ServiceError } from "./service-error";

/**
 * Represents an abstract client-side error, typically for errors with status codes in the 4xx range.
 *
 * This abstract class extends the `ServiceError` class and serves as a base for
 * client-related errors such as validation errors, unauthorized access, or resource not found errors.
 *
 * It provides a structure for handling errors caused by the client, and specific client error
 * types (e.g., `NotFoundError`, `UnauthorizedError`) should extend this class.
 *
 * @abstract
 * @class ClientError
 * @extends {ServiceError}
 */
abstract class ClientError extends ServiceError {
    /**
     * Creates an instance of `ClientError`.
     *
     * This constructor calls the parent `ServiceError` class's constructor and sets the prototype explicitly.
     *
     * @constructor
     * @param {string} logMessage - A message used for logging purposes, which describes the nature of the client-side error.
     */
    constructor(logMessage: string) {
        super(logMessage);
        Object.setPrototypeOf(this, ClientError.prototype);
    }
}

export { ClientError };
