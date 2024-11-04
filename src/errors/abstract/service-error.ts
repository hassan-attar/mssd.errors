/**
 * The base interface for all service-related errors.
 */
interface BaseServiceError {
    /** The HTTP status code. */
    code: number;

    /** The type of the error (e.g., "ValidationError", "NotFoundError"). */
    type: string;

    /** A message explaining what went wrong, suitable for showing to end users. */
    message: string;

    /**
     * The path to the part of the request that caused the error.
     * @example ["user", "email"]
     */
    path?: (string | number)[];

    /** Optional details about the error. Not available in production. */
    details?: any[];
}

/**
 * Abstract class that serves as the base class for all service-related errors.
 *
 * This class extends the built-in JavaScript `Error` class and provides a common
 * structure for handling custom error serialization and logging. All custom service
 * errors should extend this class and implement the `serializeErrors` method to
 * standardize the error format.
 *
 * @abstract
 * @extends Error
 */
abstract class ServiceError extends Error {
    /**
     * The HTTP status code or error code representing the type of error.
     * Must be implemented by subclasses.
     *
     * @type {number}
     * @abstract
     */
    abstract code: number;

    /**
     * Method to serialize the error information into an array of `BaseServiceError` objects.
     * Each custom error class must implement this method to ensure consistent error structure.
     *
     * @abstract
     * @returns {BaseServiceError[]} - Array of serialized error objects.
     */
    abstract serializeErrors(): BaseServiceError[];

    /**
     * Converts the error object into a standardized JSON structure.
     *
     * @returns {Object} - An object containing a key `errors` with the serialized errors.
     */
    toJSON() {
        return {
            errors: this.serializeErrors()
        };
    }

    /**
     * Constructor for the `ServiceError` class.
     *
     * @param {string} logMessage - The internal message used for logging or debugging purposes.
     */
    constructor(logMessage: string) {
        super(logMessage);
        // Ensures that the prototype chain is properly set up when extending built-in classes.
        Object.setPrototypeOf(this, ServiceError.prototype);
    }
}

export { ServiceError, BaseServiceError };
