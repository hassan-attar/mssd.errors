import { ClientError } from "../abstract";
import { BaseServiceError } from "../abstract/service-error";

/**
 * Represents a forbidden error, which is used to indicate that
 * the server understands the request but refuses to authorize it.
 *
 * This class extends the `ClientError` class and is used to handle
 * HTTP 403 Forbidden errors.
 *
 * @class ForbiddenError
 * @extends {ClientError}
 */
class ForbiddenError extends ClientError {
    code = 403;

    /**
     * Reason why the request was forbidden.
     * This provides context about the authorization error.
     * @private
     * @type {string}
     */
    private reason: string;

    /**
     * Creates an instance of `ForbiddenError`.
     *
     * @param {string} reason - The reason why the request was forbidden.
     * This will be included in the error message to provide context about the issue.
     */
    constructor(reason: string) {
        super(ForbiddenError.name);
        Object.setPrototypeOf(this, ForbiddenError.prototype);
        this.reason = reason;
    }

    /**
     * Serializes the error reason into an array of `BaseServiceError` objects.
     *
     * This method creates a structured error response that includes:
     * - `code`: 403 (Forbidden)
     * - `type`: "ForbiddenError" (the name of the error class)
     * - `message`: A user-friendly message indicating the issue with the request,
     * including specific reason.
     *
     * @returns {BaseServiceError[]} An array containing the serialized error.
     */
    serializeErrors(): BaseServiceError[] {
        return [
            {
                code: this.code,
                type: ForbiddenError.name,
                message: `Access denied: ${this.reason.trim().toLowerCase()}.`
            }
        ];
    }
}

export { ForbiddenError };
