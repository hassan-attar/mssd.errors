import { ClientError as _ClientError} from "./client-error"
import { ServiceError as _ServiceError } from "./service-error"

/**
 * @namespace AbstractErrors
 * 
 * This namespace contains abstract error classes for managing custom error types in applications.
 * You typically don't need to use these errors unless for advanced cases. 
 * You can use concrete client or server errors instead.
 */
export namespace AbstractErrors {
    /**
     * Abstract class that serves as the base class for all service-related errors.
     * @see {@link _ServiceError}
     */
    export const ServiceError = _ServiceError;
    /**
     * Represents an abstract client-side error, typically for errors with status codes in the 4xx range.
     * @see {@link _ClientError}
     */
    export const ClientError = _ClientError;
}



export * from "./client-error"
export * from "./service-error"


