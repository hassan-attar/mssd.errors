import { errorHandler as errHandler } from "./error-handler";
import { ErrorRequestHandler } from "express";

/**
 * @namespace ExpressMiddlewares
 *
 * This namespace contains all middleware functions specifically designed for the Express framework.
 */
export namespace ExpressMiddlewares {
    /**
     * A middleware for handling errors in Express applications.
     *
     * @example
     * // Usage example
     * import { ExpressMiddlewares } from 'your-package-name';
     *
     * app.use(ExpressMiddlewares.errorHandler);
     *
     * @see {@link errHandler} - The original errorHandler middleware function with its own documentation.
     */
    export const errorHandler: ErrorRequestHandler = errHandler;
}

export { errorHandler as expressErrorHandler } from "./error-handler";
