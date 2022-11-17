/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Matches an Azure group.
 * Requires an Azure identity provider.
 */
export type azure_group_rule = {
    azureAD: {
        /**
         * The ID of your Azure identity provider.
         */
        connection_id: string;
        /**
         * The ID of an Azure group.
         */
        id: string;
    };
};

