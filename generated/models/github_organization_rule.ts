/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Matches a Github organization.
 * Requires a Github identity provider.
 */
export type github_organization_rule = {
    'github-organization': {
        /**
         * The ID of your Github identity provider.
         */
        connection_id: string;
        /**
         * The name of the organization.
         */
        name: string;
    };
};

