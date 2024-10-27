import { ClientError } from "../abstract";
import { BaseServiceError } from "../abstract/service-error";

/**
 * Represents a not found error, which is used to indicate that a 
 * requested resource could not be found on the server.
 * 
 * This class extends the `ClientError` class and is used to handle 
 * HTTP 404 Not Found errors.
 * 
 * @class NotFoundError
 * @extends {ClientError}
 */
class NotFoundError extends ClientError {
    /**
     * The HTTP status code representing a not found error.
     * @type {number}
     */
    code = 404;

    /**
     * The name of the resource that could not be found.
     * This is used to construct a meaningful error message.
     * @private
     * @type {string}
     */
    private resourceName: string;

    /**
     * Creates an instance of `NotFoundError`.
     * 
     * @param {string} resourceName - The name of the resource that was not found.
     * This will be included in the error message to provide context about 
     * what was missing.
     */
    constructor(resourceName: string) {
        super(NotFoundError.name);
        Object.setPrototypeOf(this, NotFoundError.prototype);
        this.resourceName = resourceName;
    }

    /**
     * Serializes the error details into an array of `BaseServiceError` objects.
     * 
     * This method creates a structured error response that includes:
     * - `code`: 404 (Not Found)
     * - `type`: "NotFoundError" (the name of the error class)
     * - `message`: A user-friendly message indicating that the requested 
     * resource was not found, including the specific resource name.
     * 
     * @returns {BaseServiceError[]} An array containing the serialized error details.
     */
    serializeErrors(): BaseServiceError[] {
        return [{
            code: this.code,
            type: NotFoundError.name,
            message: `Sorry, the requested ${this.resourceName.trim().toLowerCase() ?? "resource"} was not found.`,
        }];
    }
}

export { NotFoundError };
