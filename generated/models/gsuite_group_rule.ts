/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Matches a group in Google Workspace.
 * Requires a Google Workspace identity provider.
 */
export type gsuite_group_rule = {
    gsuite: {
        /**
         * The ID of your Google Workspace identity provider.
         */
        connection_id: string;
        /**
         * The email of the Google Workspace group.
         */
        email: string;
    };
};

