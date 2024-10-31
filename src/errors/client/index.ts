import { NotFoundError as _NotFoundError } from "./not-found-error";
import { UnauthorizedError as _UnauthorizedError } from "./unauthorized-error";
import { RequestDataValidationError as _RequestDataValidationError } from "./request-data-validation-error";
import { UnprocessableEntityError as _UnprocessableEntityError } from "./unprocessable-entity-error";

/**
 * @namespace ClientErrors
 *
 * This namespace contains concrete error classes related to client-related errors. (4xx errors)
 */
export namespace ClientErrors {
    /**
     * Represents a not found error, which is used to indicate that a
     * requested resource could not be found on the server. (404 Not Found error)
     * @see {@link _NotFoundError}
     */
    export const NotFoundError = _NotFoundError;
    /**
     * Represents an unauthorized access error, typically indicating that the user
     * is not authenticated and needs to log in to access the requested resource. (401 Unauthorized error)
     * @see {@link _UnauthorizedError}
     */
    export const UnauthorizedError = _UnauthorizedError;
    /**
     * Represents a Bad-Request error that occurs when the input data does not conform
     * to a specified schema or type. (400 Bad Request error)
     * @see {@link _RequestDataValidationError}
     */
    export const RequestDataValidationError = _RequestDataValidationError;
    /**
     * Represents an Unprocessable Entity error that occurs when the server understands
     * the request and input types but cannot process it due to semantic issues with the input data.
     * @see {@link _UnprocessableEntityError}
     */
    export const UnprocessableEntityError = _UnprocessableEntityError;
}

export * from "./not-found-error";
export * from "./unauthorized-error";
export * from "./request-data-validation-error";
export * from "./unprocessable-entity-error";
