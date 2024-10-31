import { ClientError } from "../abstract";
import { BaseServiceError } from "../abstract/service-error";

/**
 * Represents an unprocessable entity error, which is used to indicate that
 * the server understands the request but cannot process it due to validation
 * issues or semantic reasons.
 *
 * This class extends the `ClientError` class and is used to handle
 * HTTP 422 Unprocessable Entity errors.
 *
 * @class UnprocessableEntityError
 * @extends {ClientError}
 */
class UnprocessableEntityError extends ClientError {
    code = 422;

    /**
     * Reason about why the entity could not be processed.
     * This is used to provide context about the specific validation error.
     * @private
     * @type {string}
     */
    private reason: string;

    /**
     * Creates an instance of `UnprocessableEntityError`.
     *
     * @param {string} reason - The reason why the request could not be processed.
     * This will be included in the error message to provide context about the issue.
     */
    constructor(reason: string) {
        super(UnprocessableEntityError.name);
        Object.setPrototypeOf(this, UnprocessableEntityError.prototype);
        this.reason = reason;
    }

    /**
     * Serializes the error reason into an array of `BaseServiceError` objects.
     *
     * This method creates a structured error response that includes:
     * - `code`: 422 (Unprocessable Entity)
     * - `type`: "UnprocessableEntityError" (the name of the error class)
     * - `message`: A user-friendly message indicating the issue with the request,
     * including specific reason.
     *
     * @returns {BaseServiceError[]} An array containing the serialized error.
     */
    serializeErrors(): BaseServiceError[] {
        return [
            {
                code: this.code,
                type: UnprocessableEntityError.name,
                message: `Unable to process your request: ${this.reason.trim().toLowerCase()}.`
            }
        ];
    }
}

export { UnprocessableEntityError };
