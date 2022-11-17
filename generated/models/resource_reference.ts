/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A reference to a load balancer resource.
 */
export type resource_reference = {
    /**
     * When listed as a reference, the type (direction) of the reference.
     */
    reference_type?: 'referral' | 'referrer';
    /**
     * A list of references to (referrer) or from (referral) this resource.
     */
    references?: Array<Record<string, any>>;
    resource_id?: any;
    /**
     * The human-identifiable name of the resource.
     */
    resource_name?: string;
    /**
     * The type of the resource.
     */
    resource_type?: 'load_balancer' | 'monitor' | 'pool';
};

