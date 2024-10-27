import {NotFoundError as _NotFoundError} from "./not-found-error";
import {UnauthorizedError as _UnauthorizedError} from "./unauthorized-error";
import {ValidationError as _ValidationError} from "./validation-error";

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
     * Represents a validation error that occurs when the input data does not conform 
     * to a specified schema. (400 Bad Request error)
     * @see {@link _ValidationError}
     */
    export const ValidationError = _ValidationError;
}

export * from "./not-found-error"
export * from "./unauthorized-error"
export * from "./validation-error"