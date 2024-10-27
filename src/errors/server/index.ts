import {InternalServerError as _InternalServerError} from "./internal-server-error"

/**
 * @namespace ServerErrors
 * 
 * This namespace contains concrete error classes related to server-side errors.
 */
export namespace ServerErrors {
    /**
     * Represents a generic server error, by default a 500 Internal Server Error.
     * @see {@link _InternalServerError}
     */
    export const InternalServerError = _InternalServerError;
}

export * from "./internal-server-error"