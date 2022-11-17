/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Defines rules for fine-grained control over content than signed URL tokens alone. Access rules primarily make tokens conditionally valid based on user information. Access Rules are specified on token payloads as the `accessRules` property containing an array of Rule objects.
 */
export type accessRules = {
    /**
     * The action to take when a request matches a rule. If the action is `block`, the signed token blocks views for viewers matching the rule.
     */
    readonly action?: 'allow' | 'block';
    /**
     * An array of 2-letter country codes in ISO 3166-1 Alpha-2 format used to match requests.
     */
    readonly country?: Array<string>;
    /**
     * An array of IPv4 or IPV6 addresses or CIDRs used to match requests.
     */
    readonly ip?: Array<string>;
    /**
     * Lists available rule types to match for requests. An `any` type matches all requests and can be used as a wildcard to apply default actions after other rules.
     */
    readonly type?: 'any' | 'ip.src' | 'ip.geoip.country';
};

