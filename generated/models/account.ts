/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { common_components_schemas_identifier } from './common_components_schemas_identifier';

export type account = {
    /**
     * Timestamp for the creation of the account
     */
    readonly created_on?: string;
    id: common_components_schemas_identifier;
    /**
     * Account name
     */
    name: string;
    /**
     * Account settings
     */
    settings?: {
        /**
         * Indicates whether membership in this account requires that
         * Two-Factor Authentication is enabled
         */
        enforce_twofactor?: boolean;
        /**
         * Indicates whether new zones should use the account-level custom
         * nameservers by default
         */
        use_account_custom_ns_by_default?: boolean;
    };
};

