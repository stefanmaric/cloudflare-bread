/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Matches an Okta group.
 * Requires an Okta identity provider.
 */
export type okta_group_rule = {
    okta: {
        /**
         * The ID of your Okta identity provider.
         */
        connection_id: string;
        /**
         * The email of the Okta group.
         */
        email: string;
    };
};

