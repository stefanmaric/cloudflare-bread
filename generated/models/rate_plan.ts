/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The rate plan applied to the subscription.
 */
export type rate_plan = {
    /**
     * The currency applied to the rate plan subscription.
     */
    currency?: string;
    /**
     * Whether this rate plan is managed externally from Cloudflare.
     */
    externally_managed?: boolean;
    /**
     * The ID of the rate plan.
     */
    id?: any;
    /**
     * Whether a rate plan is enterprise-based (or newly adopted term contract).
     */
    is_contract?: boolean;
    /**
     * The full name of the rate plan.
     */
    public_name?: string;
    /**
     * The scope that this rate plan applies to.
     */
    scope?: string;
    /**
     * The list of sets this rate plan applies to.
     */
    sets?: Array<string>;
};

