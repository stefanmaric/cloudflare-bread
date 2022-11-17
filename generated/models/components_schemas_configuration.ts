/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The configuration object for the current rule.
 */
export type components_schemas_configuration = {
    /**
     * The configuration target for this rule. You must set the target to `ua` for User Agent Blocking rules.
     */
    target?: string;
    /**
     * The exact user agent string to match. This value will be compared to the received `User-Agent` HTTP header value.
     */
    value?: string;
};

