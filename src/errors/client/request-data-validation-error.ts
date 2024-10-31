import { ClientError } from "../abstract";
import { BaseServiceError } from "../abstract/service-error";

/**
 * Interface representing the structure of a request validation error.
 * This interface defines the standard format for validation errors that occur during input validation processes.
 *
 * Developers can use `ZodIssue` types directly in place of this
 * interface, as they are structurally polymorphic and share a
 * compatible shape. This allows for flexibility in handling
 * validation errors, whether using Zod or custom validation logic.
 */
interface BaseRequestDataValidationError {
    /**
     * A user-friendly error message that describes the validation issue.
     * This message should be clear and informative, allowing users
     * to understand what went wrong with their input.
     *
     * @type {string}
     */
    message: string;

    /**
     * An array representing the path to the specific input field or value
     * that triggered the validation error. The path can consist of strings
     * (for object keys) or numbers (for array indices), allowing for
     * precise identification of the invalid data in nested structures.
     *
     * @type {(string | number)[]}
     * @example
     * // Example path for an invalid field in a nested object:
     * // If the error is related to 'user.address.street',
     * // the path would be ['user', 'address', 'street'].
     */
    path: (string | number)[];
}

/**
 * Represents a request data validation error that occurs when the input data does not conform
 * to a specified schema.
 *
 * This class extends the `ClientError` class and is used to handle HTTP
 * 400 Bad Request errors resulting from invalid input.
 *
 * @class RequestDataValidationError
 * @extends {ClientError}
 */
class RequestDataValidationError extends ClientError {
    /**
     * The HTTP status code representing a validation error.
     * @type {number}
     */
    code = 400;

    /**
     * An array of validation error objects conforming to the `BaseRequestDataValidationError` interface.
     * @private
     * @type {BaseRequestDataValidationError[]}
     */
    private errors: BaseRequestDataValidationError[];

    /**
     * The context of the validation error, indicating where the validation failed.
     * This can be "body", "query", "path", "header", or "cookie".
     * @private
     * @type {"body" | "query" | "path" | "header" | "cookie"}
     */
    private context: "body" | "query" | "path" | "header" | "cookie";

    /**
     * Creates an instance of `RequestDataValidationError`.
     *
     * @param {BaseRequestDataValidationError[]} errors - An array of validation error objects.
     * @param {"body" | "query" | "path" | "header" | "cookie"} context - The context where the validation failed.
     */
    constructor(
        errors: BaseRequestDataValidationError[],
        context: "body" | "query" | "path" | "header" | "cookie"
    ) {
        super(RequestDataValidationError.name);
        this.errors = errors;
        this.context = context;
        Object.setPrototypeOf(this, RequestDataValidationError.prototype);
    }

    /**
     * Serializes the error details into an array of `BaseServiceError` objects.
     *
     * This method maps over the validation error details to create a structured
     * response for each validation error, including the status code, type,
     * message, path of the invalid input, and additional details.
     *
     * @returns {BaseServiceError[]} An array of serialized error details for each validation error, which includes:
     * - `code`: 400 (Bad Request)
     * - `type`: "RequestDataValidationError" (the name of the error class)
     * - `message`: A user-friendly message indicating the validation issue.
     * - `path`: An array showing the specific path of the invalid input.
     * - `details`: An array containing additional information about the error.
     */
    serializeErrors(): BaseServiceError[] {
        return this.errors.map((err) => ({
            code: this.code,
            type: RequestDataValidationError.name,
            message: err.message,
            path: [this.context, ...err.path],
            details: [err]
        }));
    }
}

export { RequestDataValidationError };
